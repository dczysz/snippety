import React from 'react';

import StyledTitleBar from './styles/TitleBar';

interface Props {
  title?: string;
  type?: string;
  transitionTime?: number;
}

const TitleBar: React.FC<Props> = ({ title, type, transitionTime }) => (
  <StyledTitleBar title={title} type={type} transitionTime={transitionTime}>
    {title ? <div>{title}</div> : <span />}
  </StyledTitleBar>
);

export default TitleBar;
