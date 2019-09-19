import React from 'react';
import styled from 'styled-components';

const StyledTitleBar = styled.div`
  height: ${p => p.theme.titleBarHeight};
  background: #dddd;
  display: flex;
  align-items: center;
  padding-left: 0.25rem;
  border-radius: ${p => p.theme.br} ${p => p.theme.br} 0 0;
  color: hsl(${p => p.theme.gray});

  div {
    font-size: 0.8rem;
    font-weight: bold;
    margin-left: 0.25rem;
  }

  ::before,
  ::after,
  span {
    width: 0.75rem;
    height: 0.75rem;
    content: '';
    background: red;
    border-radius: 50%;
    margin: 0 0.25rem;
    display: ${p => (p.title ? 'none' : 'block')};
  }

  ::before {
    background: #f44;
  }
  span {
    background: #9b3;
  }
  ::after {
    background: #fb5;
  }
`;

const TitleBar = ({ title }) => {
  return (
    <StyledTitleBar title={title}>
      {!title && <span />}
      {title && <div>{title}</div>}
    </StyledTitleBar>
  );
};

export default TitleBar;
