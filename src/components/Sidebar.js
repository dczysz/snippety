import React, { useContext, useState, useEffect } from 'react';

import { AppContext } from '../store/context';
import * as types from '../store/types';
import saveImg from '../util/saveImg';
import { checkRatio } from '../util/ratio';
import Slider from './Slider';
import Tooltip from './Tooltip';
import Footer from './Footer';
import Select from './Select';
import StyledSidebar from './styles/Sidebar';
import * as icons from '../assets/icons';

const Sidebar = () => {
  const [state, dispatch] = useContext(AppContext);
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
  }) => {
    console.log('Saving...');
    setLoading(true);
    setError(false);

    try {
      saveImg(document.querySelector('.content'), format, state.hue < 0, () =>
        setLoading(false)
      );
    } catch (err) {
      setError(true);
    }
  };

  return (
    <StyledSidebar errorLife={errorLife}>
      <h2>Settings</h2>

      {/* ---------- Dropdowns ---------- */}
      <Select
        label="Language"
        options={types.languageTypes}
        defaultValue={state.language}
        dispatch={dispatch}
        actionType={types.actionTypes.LANGUAGE}
      />
      <Select
        label="Extras"
        options={types.pluginTypes}
        defaultValue={state.plugin}
        dispatch={dispatch}
        actionType={types.actionTypes.PLUGIN}
      />
      <Select
        label="Title Bar"
        options={types.titleBarTypes}
        defaultValue={state.titleBar}
        dispatch={dispatch}
        actionType={types.actionTypes.TITLE_BAR}
      />
      <Select
        label="Font"
        options={types.fontTypes}
        defaultValue={state.font}
        dispatch={dispatch}
        actionType={types.actionTypes.FONT}
      />

      {/* ---------- Sliders ---------- */}
      <Slider
        title="Angle"
        icon={icons.angle}
        unit="&deg;"
        min={0}
        max={360}
        value={state.angle}
        dispatch={dispatch}
        actionType={types.actionTypes.ANGLE}
      />
      <Slider
        title="Hue"
        icon={icons.hue}
        unit="&deg;"
        min={-1}
        max={360}
        value={state.hue}
        dispatch={dispatch}
        actionType={types.actionTypes.HUE}
      />
      <Slider
        title="Saturation"
        icon={icons.saturation}
        unit="%"
        min={0}
        max={100}
        value={state.saturation}
        dispatch={dispatch}
        actionType={types.actionTypes.SATURATION}
      />
      <Slider
        title="Lightness"
        icon={icons.lightness}
        unit="%"
        min={0}
        max={100}
        value={state.lightness}
        dispatch={dispatch}
        actionType={types.actionTypes.LIGHTNESS}
      />
      <Slider
        title="X Padding"
        icon={icons.x}
        unit="px"
        min={0}
        max={200}
        value={state.paddingX}
        dispatch={dispatch}
        actionType={types.actionTypes.PADDING_X}
      />
      <Slider
        title="Y Padding"
        icon={icons.y}
        unit="px"
        min={0}
        max={200}
        value={state.paddingY}
        dispatch={dispatch}
        actionType={types.actionTypes.PADDING_Y}
      />

      <hr />

      <label className="standalone">
        <span>Size (px):</span>
        <span>
          {state.width && state.height
            ? `${state.width} x ${state.height}`
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
          {state.height !== 0 && (
            <span className="ratio-match">
              {checkRatio((state.width / state.height).toFixed(2))}
            </span>
          )}
          <span>
            {state.width && state.height
              ? (state.width / state.height).toFixed(2)
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

export default Sidebar;
