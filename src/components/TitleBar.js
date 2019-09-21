import React from 'react';

import StyledTitleBar from './styles/TitleBar';

const TitleBar = ({ title, type }) => (
  <StyledTitleBar title={title} type={type}>
    {title ? <div>{title}</div> : <span />}
  </StyledTitleBar>
);

export default TitleBar;
