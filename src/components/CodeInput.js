import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../store/context';
import { actionTypes } from '../store/types';
import TitleBar from './TitleBar';

const StyledCodeInput = styled.div`
  width: 100%;
  margin-top: 3rem;
  box-shadow: ${p => p.theme.bs};
  border-radius: ${p => p.theme.br};
  position: relative;

  textarea {
    width: 100%;
    display: block;
    white-space: pre;
    min-height: 10rem;
    min-width: 30rem;
    border-radius: 0 0 ${p => p.theme.br} ${p => p.theme.br};
    border: none;
    background-color: hsl(${p => p.theme.gray});
    color: hsl(${p => p.theme.white});
    padding: 1rem;
    font-size: inherit;
    resize: vertical;
    margin: 0;
  }

  ::after {
    content: 'Paste or type your code here';
    position: absolute;
    top: ${p => p.theme.titleBarHeight};
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: hsl(${p => p.theme.white});
    border: 8px solid hsla(${p => p.theme.white}, 0.8);
    border-radius: ${p => p.theme.br};
    margin: 8px;
    pointer-events: none;
    opacity: ${p => (p.showHint ? 0.8 : 0)};
    font-size: 1.2rem;
  }
`;

const CodeInput = () => {
  const [state, dispatch] = useContext(AppContext);

  return (
    <StyledCodeInput showHint={state.input === ''}>
      <TitleBar title="Input" />
      <textarea
        value={state.input}
        onChange={e =>
          dispatch({ type: actionTypes.INPUT, payload: e.target.value })
        }
        spellCheck={false}
      />
    </StyledCodeInput>
  );
};

export default CodeInput;
