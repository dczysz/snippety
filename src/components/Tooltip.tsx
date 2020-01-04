import React from 'react';

import { ratios } from '../util/ratio';
import StyledTooltip from './styles/Tooltip';

const Tooltip: React.FC = () => (
  <StyledTooltip>
    <div className="heading">Aspect Ratios</div>
    {ratios.map(ratio => (
      <div key={ratio[0]} className="row">
        <span>{ratio[0]}</span>
        <span>{ratio[1]}</span>
      </div>
    ))}
  </StyledTooltip>
);

export default Tooltip;
