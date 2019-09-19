import React from 'react';
import styled from 'styled-components';

const StyledSlider = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
  }

  span {
    width: 3.5rem;
    text-align: center;
    margin: 0 0.5rem;
  }

  span:first-of-type {
    width: auto;
  }
`;

const Slider = props => {
  return (
    <StyledSlider title={props.title}>
      <span>{props.title.substr(0, 1)}</span>
      <input type="range" {...props} />
      <span>{props.value + props.unit}</span>
    </StyledSlider>
  );
};

export default Slider;
