import React from 'react';

import StyledSlider from './styles/Slider';

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
