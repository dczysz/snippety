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

  span:first-of-type {
    text-align: left;
    margin-right: 0.5rem;
  }
  span:last-of-type {
    margin-left: 0.5rem;
    text-align: right;
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
