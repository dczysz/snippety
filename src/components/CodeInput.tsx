import React, { useContext } from 'react';

import { AppContext } from '../store/context';
import { actionTypes } from '../store/types';
import TitleBar from './TitleBar';
import StyledCodeInput from './styles/CodeInput';

const CodeInput: React.FC = () => {
  const [state, dispatch] = useContext(AppContext);

  const filterInput = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle tabs
    if (e.keyCode === 9) {
      e.preventDefault();

      const target = e.target as HTMLTextAreaElement;
      const currentInput = target.value;
      const cursorStart = target.selectionStart;
      const cursorEnd = target.selectionEnd;
      const newOutput =
        currentInput.substring(0, cursorStart) +
        '  ' +
        currentInput.substring(cursorEnd);

      dispatch({ type: actionTypes.INPUT, payload: newOutput });

      //TODO: Fix tab moving cursor to end of textarea
      // e.target.cursorStart = cursorStart; //!Doesnt work
    }
  };

  return (
    <StyledCodeInput showHint={state.input === ''}>
      <TitleBar title="Input" type="OSX" />
      <textarea
        value={state.input}
        onChange={e => {
          dispatch({ type: actionTypes.INPUT, payload: e.target.value });
        }}
        onKeyDown={filterInput}
        spellCheck={false}
        aria-label="Code Input"
      />
    </StyledCodeInput>
  );
};

export default CodeInput;
