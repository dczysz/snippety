import React from 'react';

import StyledSlider from './styles/Slider';

const Slider = props => (
  <StyledSlider title={props.title}>
    <props.icon />
    <input
      type="range"
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={e =>
        props.dispatch({ type: props.actionType, payload: e.target.value })
      }
    />
    <span>{props.value + props.unit}</span>
  </StyledSlider>
);

export default Slider;
