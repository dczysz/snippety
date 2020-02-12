import React from 'react';
import { connect } from 'react-redux';

import { actionTypes } from '../store/types';
import { ActionType, StateType } from '../store/reducer';
import TitleBar from './TitleBar';
import StyledCodeInput from './styles/CodeInput';

interface Props {
  input: string;
  setInput: any;
}

const CodeInput: React.FC<Props> = ({ input, setInput }) => {
  const filterInput = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle tabs
    if (e.keyCode === 9) {
      e.preventDefault();

      const target = e.target as HTMLTextAreaElement;
      const currentInput = target.value;
      const cursorStart = target.selectionStart;
      const cursorEnd = target.selectionEnd;
      const newInput =
        currentInput.substring(0, cursorStart) +
        '  ' +
        currentInput.substring(cursorEnd);

      setInput(newInput);

      // Fix setInput() moving cursor to end of textarea
      setTimeout(
        () => target.setSelectionRange(cursorStart + 2, cursorEnd + 2),
        0
      );
    }
  };

  const inputChangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(value);
  };

  return (
    <StyledCodeInput showHint={input === ''}>
      <TitleBar title="Input" type="OSX" />
      <textarea
        value={input}
        onChange={inputChangeHandler}
        onKeyDown={filterInput}
        spellCheck={false}
        aria-label="Code Input"
      />
    </StyledCodeInput>
  );
};

const mapStateToProps = (state: StateType) => ({
  input: state.input,
});

const mapDispatchToProps = (dispatch: React.Dispatch<ActionType>) => ({
  setInput: (newInput: string) =>
    dispatch({ type: actionTypes.INPUT, payload: newInput }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CodeInput);
