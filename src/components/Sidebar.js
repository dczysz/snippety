import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../store/context';
import { languageTypes, actionTypes, pluginTypes } from '../store/types';
import saveImg from '../util/saveImg';
import Slider from './Slider';
import Tooltip from './Tooltip';
import * as icons from '../assets/icons';

const StyledSidebar = styled.aside`
  align-items: stretch;
  background-color: hsl(${p => p.theme.gray});
  color: hsl(${p => p.theme.white});
  display: flex;
  flex-direction: column;
  max-width: ${p => p.theme.sidebarWidth}px;
  padding: 0 1rem;

  label {
    margin: 0.5rem 0;
  }

  label.select {
    align-items: baseline;
    display: flex;
    justify-content: space-between;

    select {
      background: hsl(${p => p.theme.lightGray});
      border: none;
      border-radius: ${p => p.theme.br};
      color: hsl(${p => p.theme.white});
      font-size: inherit;
      padding: 0.25rem;
      text-align: center;
      width: 10rem;

      :focus {
        outline-color: hsl(${p => p.theme.white});
      }
    }
  }

  label.standalone {
    display: flex;
    justify-content: space-between;

    .flex {
      align-items: center;
      display: flex;
    }

    .tooltip-button {
      align-items: center;
      background: none;
      border: none;
      display: flex;
      justify-content: center;
      margin-left: 0.5rem;
      padding: 0;
      position: relative;
      cursor: help;

      svg {
        fill: hsl(${p => p.theme.lighterGray});
        height: 1.1rem;
        transition: fill 0.1s;
      }

      :hover,
      :focus {
        svg {
          fill: hsl(${p => p.theme.white});
        }
        outline: none;
      }

      .tooltip {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.1s;
        z-index: 1;
      }

      :focus {
        .tooltip {
          opacity: 1;
          pointer-events: all;
        }
      }
    }
  }

  hr {
    width: 100%;
    margin: 1rem 0;
    border: 0.5px solid hsl(${p => p.theme.lightGray});
  }

  .save {
    margin-top: 1rem;

    button {
      background-color: hsl(${p => p.theme.gray});
      border-radius: ${p => p.theme.br};
      border: 2px solid hsl(${p => p.theme.lightGray});
      padding: 0.25rem 0.5rem;
      color: hsl(${p => p.theme.lighterGray});
      margin: 0.5rem 0;
      margin-right: 0.5rem;
      font-size: inherit;
      transition: all 0.1s;

      :hover {
        background-color: hsl(${p => p.theme.lighterGray});
        color: hsl(${p => p.theme.gray});
        border-color: hsl(${p => p.theme.lighterGray});
      }

      :focus {
        color: hsl(${p => p.theme.lighterGray});
        border-color: hsl(${p => p.theme.lighterGray});
        outline: none;
      }

      :hover:focus {
        color: hsl(${p => p.theme.gray});
      }
    }
  }

  svg {
    height: 1.625rem;
    width: auto;
    fill: hsl(${p => p.theme.white});
  }
`;

const Sidebar = () => {
  const [state, dispatch] = useContext(AppContext);

  const save = ({
    target: {
      dataset: { format },
    },
  }) => {
    console.log('Saving...');
    saveImg(document.querySelector('.content'), format);
  };

  return (
    <StyledSidebar>
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
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
