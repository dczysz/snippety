import React from 'react';

import StyledTitleBar from './styles/TitleBar';

const TitleBar = ({ title, type }) => {
  return (
    <StyledTitleBar title={title} type={type}>
      {title ? <div>{title}</div> : <span />}
    </StyledTitleBar>
  );
};

export default TitleBar;
