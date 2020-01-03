import React from 'react';

import StyledTitleBar from './styles/TitleBar';

interface Props {
  title?: string;
  type?: string;
}

const TitleBar: React.FC<Props> = ({ title, type }) => (
  <StyledTitleBar title={title}>
    {title ? <div>{title}</div> : <span />}
  </StyledTitleBar>
);

export default TitleBar;
