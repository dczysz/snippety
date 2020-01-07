import React from 'react';

import StyledSlider from './styles/Slider';

interface Props {
  title: string;
  icon: React.FC;
  unit: string;
  min: number;
  max: number;
  value: number;
  setValue: (newValue: string) => void;
}

const Slider: React.FC<Props> = ({
  title,
  icon: Icon,
  unit,
  min,
  max,
  value,
  setValue,
}) => (
  <StyledSlider title={title}>
    <Icon />
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    <span>{value + unit}</span>
  </StyledSlider>
);

export default Slider;
