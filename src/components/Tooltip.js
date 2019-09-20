import React from 'react';

import StyledTooltip from './styles/Tooltip';

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
        <span>4:3</span>
        <span>1.33</span>
      </div>
      <div className="row">
        <span>16:9</span>
        <span>1.78</span>
      </div>
    </StyledTooltip>
  );
};

export default Tooltip;
