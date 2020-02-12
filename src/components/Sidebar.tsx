import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as types from '../store/types';
import { StateType, ActionType } from '../store/reducer';
import saveImg from '../util/saveImg';
import { checkRatio } from '../util/ratio';
import Slider from './Slider';
import Tooltip from './Tooltip';
import Footer from './Footer';
import Select from './Select';
import StyledSidebar from './styles/Sidebar';
import * as icons from '../assets/icons';

interface Props extends StateType {
  setSelectValue: (actionType: string, newValue: string) => void;
  setSliderValue: (actionType: string, newValue: number) => void;
}

const Sidebar: React.FC<Props> = props => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const errorLife = 4000;

  useEffect(() => {
    error && setTimeout(() => setError(false), errorLife);
  }, [error]);

  const save = ({
    target: {
      dataset: { format },
    },
  }: any) => {
    console.log('Saving...');
    setLoading(true);
    setError(false);

    try {
      saveImg(document.querySelector('.content'), format, props.hue < 0, () =>
        setLoading(false)
      );
    } catch (err) {
      setError(true);
    }
  };

  const selects = [
    {
      label: 'Language',
      options: types.languageTypes,
      defaultValue: props.language,
      setValue: (newValue: string) =>
        props.setSelectValue(types.actionTypes.LANGUAGE, newValue),
    },
    {
      label: 'Extras',
      options: types.pluginTypes,
      defaultValue: props.plugin,
      setValue: (newValue: string) =>
        props.setSelectValue(types.actionTypes.PLUGIN, newValue),
    },
    {
      label: 'Title Bar',
      options: types.titleBarTypes,
      defaultValue: props.titleBar,
      setValue: (newValue: string) =>
        props.setSelectValue(types.actionTypes.TITLE_BAR, newValue),
    },
    {
      label: 'Font',
      options: types.fontTypes,
      defaultValue: props.font,
      setValue: (newValue: string) =>
        props.setSelectValue(types.actionTypes.FONT, newValue),
    },
  ];

  const sliders = [
    {
      title: 'Angle',
      icon: icons.angle,
      unit: '°',
      min: 0,
      max: 360,
      value: props.angle,
      setValue: (newValue: string) =>
        props.setSliderValue(types.actionTypes.ANGLE, +newValue),
    },
    {
      title: 'Hue',
      icon: icons.hue,
      unit: '°',
      min: -1,
      max: 360,
      value: props.hue,
      setValue: (newValue: string) =>
        props.setSliderValue(types.actionTypes.HUE, +newValue),
    },
    {
      title: 'Saturation',
      icon: icons.saturation,
      unit: '%',
      min: 0,
      max: 100,
      value: props.saturation,
      setValue: (newValue: string) =>
        props.setSliderValue(types.actionTypes.SATURATION, +newValue),
    },
    {
      title: 'Lightness',
      icon: icons.lightness,
      unit: '%',
      min: 0,
      max: 100,
      value: props.lightness,
      setValue: (newValue: string) =>
        props.setSliderValue(types.actionTypes.LIGHTNESS, +newValue),
    },
    {
      title: 'X Padding',
      icon: icons.x,
      unit: 'px',
      min: 0,
      max: 200,
      value: props.paddingX,
      setValue: (newValue: string) =>
        props.setSliderValue(types.actionTypes.PADDING_X, +newValue),
    },
    {
      title: 'Y Padding',
      icon: icons.y,
      unit: 'px',
      min: 0,
      max: 200,
      value: props.paddingY,
      setValue: (newValue: string) =>
        props.setSliderValue(types.actionTypes.PADDING_Y, +newValue),
    },
  ];

  return (
    <StyledSidebar errorLife={errorLife}>
      <h2>Settings</h2>

      {/* --------- Dropdowns --------- */}
      {selects.map(s => (
        <Select
          key={s.label}
          label={s.label}
          options={s.options}
          defaultValue={s.defaultValue}
          setValue={s.setValue}
        />
      ))}

      {/* ---------- Sliders ---------- */}
      {sliders.map(s => (
        <Slider
          key={s.title}
          title={s.title}
          icon={s.icon}
          unit={s.unit}
          min={s.min}
          max={s.max}
          value={s.value}
          setValue={s.setValue}
        />
      ))}

      <hr />

      <label className="standalone">
        <span>Size (px):</span>
        <span>
          {props.width && props.height
            ? `${props.width} x ${props.height}`
            : '?'}
        </span>
      </label>
      <label className="standalone">
        <span className="flex">
          Ratio:{' '}
          <button className="tooltip-button">
            <icons.info />
            <span className="tooltip">
              <Tooltip />
            </span>
          </button>
        </span>
        <span>
          {props.width && props.height && props.height !== 0 && (
            <span className="ratio-match">
              {checkRatio((props.width / props.height).toFixed(2))}
            </span>
          )}
          <span>
            {props.width && props.height
              ? (props.width / props.height).toFixed(2)
              : '?'}
          </span>
        </span>
      </label>

      <div className="save">
        <button onClick={save} data-format="png">
          Save PNG
        </button>
        <button onClick={save} data-format="jpg">
          Save JPG
        </button>

        {loading && <div className="loading">Saving...</div>}
        {error && <div className="error">Hmmm, that didn't work </div>}
      </div>

      <Footer />
    </StyledSidebar>
  );
};

const mapStateToProps = (state: StateType) => ({
  ...state,
});

const mapDispatchToProps = (dispatch: React.Dispatch<ActionType>) => ({
  setSelectValue: (actionType: string, newValue: string) =>
    dispatch({ type: actionType, payload: newValue }),
  setSliderValue: (actionType: string, newValue: number) =>
    dispatch({ type: actionType, payload: newValue }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
