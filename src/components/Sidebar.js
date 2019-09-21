import React, { useContext, useState, useEffect } from 'react';

import { AppContext } from '../store/context';
import { languageTypes, actionTypes, pluginTypes } from '../store/types';
import saveImg from '../util/saveImg';
import Slider from './Slider';
import Tooltip from './Tooltip';
import * as icons from '../assets/icons';
import StyledSidebar from './styles/Sidebar';
import Footer from './Footer';

const Sidebar = () => {
  const [state, dispatch] = useContext(AppContext);
  const [error, setError] = useState(false);
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
    setError(false);

    try {
      saveImg(document.querySelector('.content'), format);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <StyledSidebar errorLife={errorLife}>
      <h2>Settings</h2>
      <label className="select">
        <span>Language</span>
        <select
          defaultValue={state.language}
          onChange={e =>
            dispatch({ type: actionTypes.LANGUAGE, payload: e.target.value })
          }
        >
          {Object.keys(languageTypes).map(key => (
            <option key={key} value={languageTypes[key].code}>
              {languageTypes[key].name}
            </option>
          ))}
        </select>
      </label>
      <label className="select">
        <span>Extras</span>
        <select
          defaultValue={state.plugin}
          onChange={e =>
            dispatch({ type: actionTypes.PLUGIN, payload: e.target.value })
          }
        >
          <option value=""></option>
          {Object.keys(pluginTypes).map(key => (
            <option key={key} value={pluginTypes[key].code}>
              {pluginTypes[key].name}
            </option>
          ))}
          }
        </select>
      </label>
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
        min={0}
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
          {state.width && state.height && state.height !== 0
            ? (state.width / state.height).toFixed(2)
            : '?'}
        </span>
      </label>

      <div className="save">
        <button onClick={save} data-format="png">
          Save PNG
        </button>
        <button onClick={save} data-format="jpg">
          Save JPG
        </button>

        {error && <div className="error">Hmmm, that didn't work {error}</div>}
      </div>

      <Footer />
    </StyledSidebar>
  );
};

export default Sidebar;
