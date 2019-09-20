import React from 'react';
import styled from 'styled-components';

const StyledTitleBar = styled.div`
  height: ${p => p.theme.titleBarHeight};
  background: hsla(${p => p.theme.white}, 0.85);
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
    background: #ff5f57;
  }
  span {
    background: #ffbd2d;
  }
  ::after {
    background: #27c93f;
  }
`;

const TitleBar = ({ title }) => {
  return (
    <StyledTitleBar title={title}>
      {title ? <div>{title}</div> : <span />}
    </StyledTitleBar>
  );
};

export default TitleBar;
