import React from 'react';
import styled from 'styled-components';

const StyledTooltip = styled.div`
  --carat-size: 0.75rem;
  background: hsl(${p => p.theme.lighterGray});
  border-radius: ${p => p.theme.br};
  color: hsl(${p => p.theme.gray});
  left: calc(1.5rem + (var(--carat-size) * 0.5));
  padding: 0.5rem;
  position: absolute;
  top: -1rem;
  min-width: 7rem;

  .heading {
    font-weight: bold;
    margin-bottom: 0.25rem;
    text-align: center;
  }

  .row {
    display: flex;
    justify-content: space-around;
  }

  ::before {
    background: inherit;
    content: '';
    height: var(--carat-size);
    left: calc(var(--carat-size) * -0.5);
    position: absolute;
    top: calc(1.5rem - (0.5 * var(--carat-size)));
    transform: rotate(45deg);
    width: var(--carat-size);
    z-index: -1;
  }
`;

const Tooltip = () => {
  return (
    <StyledTooltip>
      <div className="heading">Aspect Ratios</div>
      <div className="row">
        <span>1:1</span>
        <span>1.00</span>
      </div>
      <div className="row">
        <span>3:2</span>
        <span>1.50</span>
      </div>
      <div className="row">
        <span>1:1</span>
        <span>1.00</span>
      </div>
      <div className="row">
        <span>1:1</span>
        <span>1.00</span>
      </div>
    </StyledTooltip>
  );
};

export default Tooltip;