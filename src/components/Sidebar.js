import React, { useContext, useState, useEffect } from 'react';

import { AppContext } from '../store/context';
import {
  actionTypes,
  languageTypes,
  pluginTypes,
  titleBarTypes,
  fontTypes,
} from '../store/types';
import saveImg from '../util/saveImg';
import { checkRatio } from '../util/ratio';
import Slider from './Slider';
import Tooltip from './Tooltip';
import * as icons from '../assets/icons';
import StyledSidebar from './styles/Sidebar';
import Footer from './Footer';
import Select from './Select';

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
        options={languageTypes}
        defaultValue={state.language}
        dispatch={dispatch}
        actionType={actionTypes.LANGUAGE}
      />
      <Select
        label="Extras"
        options={pluginTypes}
        defaultValue={state.plugin}
        dispatch={dispatch}
        actionType={actionTypes.PLUGIN}
      />
      <Select
        label="Title Bar"
        options={titleBarTypes}
        defaultValue={state.titleBar}
        dispatch={dispatch}
        actionType={actionTypes.TITLE_BAR}
      />
      <Select
        label="Font"
        options={fontTypes}
        defaultValue={state.font}
        dispatch={dispatch}
        actionType={actionTypes.FONT}
      />

      {/* ---------- Sliders ---------- */}
      <Slider
        title="Angle"
        icon={icons.angle}
        unit="&deg;"
        min={0}
        max={360}
        value={state.angle}
        onChange={e =>
          dispatch({ type: actionTypes.ANGLE, payload: e.target.value })
        }
      />
      <Slider
        title="Hue"
        icon={icons.hue}
        unit="&deg;"
        min={-1}
        max={360}
        value={state.hue}
        onChange={e =>
          dispatch({ type: actionTypes.HUE, payload: e.target.value })
        }
      />
      <Slider
        title="Saturation"
        icon={icons.saturation}
        unit="%"
        min={0}
        max={100}
        value={state.saturation}
        onChange={e =>
          dispatch({ type: actionTypes.SATURATION, payload: e.target.value })
        }
      />
      <Slider
        title="Lightness"
        icon={icons.lightness}
        unit="%"
        min={0}
        max={100}
        value={state.lightness}
        onChange={e =>
          dispatch({ type: actionTypes.LIGHTNESS, payload: e.target.value })
        }
      />
      <Slider
        title="X Padding"
        icon={icons.x}
        unit="px"
        min={0}
        max={200}
        value={state.paddingX}
        onChange={e =>
          dispatch({ type: actionTypes.PADDING_X, payload: e.target.value })
        }
      />
      <Slider
        title="Y Padding"
        icon={icons.y}
        unit="px"
        min={0}
        max={200}
        value={state.paddingY}
        onChange={e =>
          dispatch({ type: actionTypes.PADDING_Y, payload: e.target.value })
        }
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
