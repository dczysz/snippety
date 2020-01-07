import React, { useState, useEffect } from 'react';

import saveImg from '../util/saveImg';
import { checkRatio } from '../util/ratio';
import Slider from './Slider';
import Tooltip from './Tooltip';
import Footer from './Footer';
import Select from './Select';
import StyledSidebar from './styles/Sidebar';
import * as icons from '../assets/icons';
import { State } from '../App';
import * as types from '../store/types';
import { ActionType } from '../store/reducer';

interface Props extends State {
  dispatch: React.Dispatch<ActionType>;
}

const Sidebar: React.FC<Props> = ({
  angle,
  hue,
  saturation,
  lightness,
  paddingY,
  paddingX,
  titleBar,
  plugin,
  language,
  font,
  dispatch,
  width,
  height,
}) => {
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
      saveImg(document.querySelector('.content'), format, hue < 0, () =>
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
      defaultValue: language,
      actionType: types.actionTypes.LANGUAGE,
    },
    {
      label: 'Extras',
      options: types.pluginTypes,
      defaultValue: plugin,
      actionType: types.actionTypes.PLUGIN,
    },
    {
      label: 'Title Bar',
      options: types.titleBarTypes,
      defaultValue: titleBar,
      actionType: types.actionTypes.TITLE_BAR,
    },
    {
      label: 'Font',
      options: types.fontTypes,
      defaultValue: font,
      actionType: types.actionTypes.FONT,
    },
  ];

  const sliders = [
    {
      title: 'Angle',
      icon: icons.angle,
      unit: '°',
      min: 0,
      max: 360,
      value: angle,
      actionType: types.actionTypes.ANGLE,
    },
    {
      title: 'Hue',
      icon: icons.hue,
      unit: '°',
      min: -1,
      max: 360,
      value: hue,
      actionType: types.actionTypes.HUE,
    },
    {
      title: 'Saturation',
      icon: icons.saturation,
      unit: '%',
      min: 0,
      max: 100,
      value: saturation,
      actionType: types.actionTypes.SATURATION,
    },
    {
      title: 'Lightness',
      icon: icons.lightness,
      unit: '%',
      min: 0,
      max: 100,
      value: lightness,
      actionType: types.actionTypes.LIGHTNESS,
    },
    {
      title: 'X Padding',
      icon: icons.x,
      unit: 'px',
      min: 0,
      max: 200,
      value: paddingX,
      actionType: types.actionTypes.PADDING_X,
    },
    {
      title: 'Y Padding',
      icon: icons.y,
      unit: 'px',
      min: 0,
      max: 200,
      value: paddingY,
      actionType: types.actionTypes.PADDING_Y,
    },
  ];

  return (
    <StyledSidebar errorLife={errorLife}>
      <h2>Settings</h2>

      {/* --------- Dropdowns --------- */}
      {selects.map(s => (
        <Select
          key={s.actionType}
          label={s.label}
          options={s.options}
          defaultValue={s.defaultValue}
          setValue={(newValue: string) =>
            dispatch({
              type: s.actionType,
              payload: newValue,
            })
          }
        />
      ))}

      {/* ---------- Sliders ---------- */}
      {sliders.map(s => (
        <Slider
          key={s.actionType}
          title={s.title}
          icon={s.icon}
          unit={s.unit}
          min={s.min}
          max={s.max}
          value={s.value}
          setValue={(newValue: string) =>
            dispatch({
              type: s.actionType,
              payload: +newValue,
            })
          }
        />
      ))}

      <hr />

      <label className="standalone">
        <span>Size (px):</span>
        <span>{width && height ? `${width} x ${height}` : '?'}</span>
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
          {width && height && height !== 0 && (
            <span className="ratio-match">
              {checkRatio((width / height).toFixed(2))}
            </span>
          )}
          <span>{width && height ? (width / height).toFixed(2) : '?'}</span>
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

export default Sidebar;
