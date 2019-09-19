import React from 'react';
import styled from 'styled-components';

const StyledSlider = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    margin: 0;
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
