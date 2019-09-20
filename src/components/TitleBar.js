import React from 'react';

import StyledTitleBar from './styles/TitleBar';

const TitleBar = ({ title }) => {
  return (
    <StyledTitleBar title={title}>
      {title ? <div>{title}</div> : <span />}
    </StyledTitleBar>
  );
};

export default TitleBar;
