import React, { useContext } from 'react';

import { AppContext } from '../store/context';
import { actionTypes } from '../store/types';
import TitleBar from './TitleBar';
import StyledCodeInput from './styles/CodeInput';

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
        aria-label="Code Input"
      />
    </StyledCodeInput>
  );
};

export default CodeInput;
