import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../store/context';
import { languageTypes } from '../store/types';
import Slider from './Slider';

const StyledSidebar = styled.aside`
  max-width: ${p => p.theme.sidebarWidth}px;
  background-color: hsl(${p => p.theme.gray});
  color: hsl(${p => p.theme.white});

  h2 {
    text-align: center;
  }

  label {
    margin: 0.5rem auto;

    &.standalone {
      margin-left: 0.5rem;
    }
  }

  div.select {
    display: flex;
    justify-content: center;

    select {
      padding: 0.25rem 0.5rem;
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
      <div className="select">
        <select
          onChange={e =>
            dispatch({ type: 'LANGUAGE', payload: e.target.value })
          }
        >
          {Object.keys(languageTypes).map(key => (
            <option key={key} value={languageTypes[key.code]}>
              {languageTypes[key].name}
            </option>
          ))}
          }
        </select>
      </div>
      <Slider
        title="Angle"
        unit="&deg;"
        min={0}
        max={360}
        value={state.angle}
        onChange={e => dispatch({ type: 'ANGLE', payload: e.target.value })}
      />
      <Slider
        title="Hue"
        unit="&deg;"
        min={0}
        max={360}
        value={state.hue}
        onChange={e => dispatch({ type: 'HUE', payload: e.target.value })}
      />
      <Slider
        title="Saturation"
        unit="%"
        min={0}
        max={100}
        value={state.saturation}
        onChange={e =>
          dispatch({ type: 'SATURATION', payload: e.target.value })
        }
      />
      <Slider
        title="Lightness"
        unit="%"
        min={0}
        max={100}
        value={state.lightness}
        onChange={e => dispatch({ type: 'LIGHTNESS', payload: e.target.value })}
      />
      <Slider
        title="X Padding"
        unit="px"
        min={0}
        max={200}
        value={state.paddingX}
        onChange={e => dispatch({ type: 'PADDING_X', payload: e.target.value })}
      />
      <Slider
        title="Y Padding"
        unit="px"
        min={0}
        max={200}
        value={state.paddingY}
        onChange={e => dispatch({ type: 'PADDING_Y', payload: e.target.value })}
      />
      <label className="standalone">
        Ratio: {state.ratio ? state.ratio.toFixed(2) : '?'}
      </label>
    </StyledSidebar>
  );
};

export default Sidebar;
