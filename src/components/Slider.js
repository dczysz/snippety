import React from 'react';

import StyledSlider from './styles/Slider';

const Slider = ({
  title,
  icon: Icon,
  min,
  max,
  value,
  dispatch,
  actionType,
  unit,
}) => (
  <StyledSlider title={title}>
    <Icon />
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={e => dispatch({ type: actionType, payload: +e.target.value })}
    />
    <span>{value + unit}</span>
  </StyledSlider>
);

export default Slider;
