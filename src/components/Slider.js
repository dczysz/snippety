import React from 'react';
import styled from 'styled-components';

const StyledSlider = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  /* Custom track to keep consistent cross-browser */
  ::before {
    content: '';
    position: absolute;
    height: 2px;
    left: 2rem;
    right: 3.2rem;
    background: hsl(${p => p.theme.lightGray});
    z-index: -1;
  }

  input[type='range'] {
    width: 100%;
    margin: 0;
    -webkit-appearance: none;
    background: transparent;

    :focus {
      outline: none;

      ::-webkit-slider-thumb {
        background: hsl(${p => p.theme.white});
      }
      ::-moz-range-thumb {
        background: hsl(${p => p.theme.white});
      }
    }

    :active,
    :hover {
      ::-webkit-slider-thumb {
        background: hsl(${p => p.theme.white});
      }
      ::-moz-range-thumb {
        background: hsl(${p => p.theme.white});
      }
    }

    /* Thumb */
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: 3px solid hsl(${p => p.theme.gray});
      border-radius: 50%;
      height: 1.25rem;
      width: 1.25rem;
      background: hsl(${p => p.theme.lighterGray});
      transition: background 0.1s;
    }
    ::-moz-range-thumb {
      border: 3px solid hsl(${p => p.theme.gray});
      border-radius: 50%;
      height: 0.875rem;
      width: 0.875rem;
      background: hsl(${p => p.theme.lighterGray});
      transition: background 0.1s;
    }

    /* Track */
    ::-webkit-slider-runnable-track {
      align-self: flex-start;
      border: none;
    }
    ::-ms-track {
      width: 100%;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }
    ::-moz-range-track {
    }
  }

  span {
    width: 4rem;
    text-align: center;
  }

  svg {
    margin-right: 1rem;
  }
  span:last-of-type {
    margin-left: 0.5rem;
    text-align: right;
  }
`;

const Slider = props => {
  return (
    <StyledSlider title={props.title}>
      <props.icon />
      <input type="range" {...props} />
      <span>{props.value + props.unit}</span>
    </StyledSlider>
  );
};

export default Slider;
