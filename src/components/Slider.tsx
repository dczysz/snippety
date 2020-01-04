import React from 'react';

import StyledSlider from './styles/Slider';

interface Props {
  title: string;
  icon: React.FC;
  min: number;
  max: number;
  value: number;
  dispatch: React.Dispatch<{ type: string; payload: number }>;
  actionType: string;
  unit: string;
}

const Slider: React.FC<Props> = ({
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
