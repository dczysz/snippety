import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../store/context';
import { languageTypes, actionTypes, pluginTypes } from '../store/types';
import Slider from './Slider';

const StyledSidebar = styled.aside`
  max-width: ${p => p.theme.sidebarWidth}px;
  background-color: hsl(${p => p.theme.gray});
  color: hsl(${p => p.theme.white});
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 1rem;

  label {
    margin: 0.5rem 0;
  }

  label.select {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    select {
      padding: 0.25rem;
      width: 10rem;
      text-align: center;
      font-size: 1rem;
      background: hsl(${p => p.theme.lightGray});
      border: none;
      border-radius: ${p => p.theme.br};
      color: hsl(${p => p.theme.white});
    }
  }
`;

const Sidebar = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <StyledSidebar>
      <h2>Settings</h2>
      <label className="select">
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
        <span>Language</span>
      </label>
      <label className="select">
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
        <span>Extras</span>
      </label>
      <Slider
        title="Angle"
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
        unit="px"
        min={0}
        max={200}
        value={state.paddingY}
        onChange={e =>
          dispatch({ type: actionTypes.PADDING_Y, payload: e.target.value })
        }
      />
      <label className="standalone">
        Ratio: {state.ratio ? state.ratio.toFixed(2) : '?'}
      </label>
    </StyledSidebar>
  );
};

export default Sidebar;
