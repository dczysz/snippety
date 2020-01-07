import React from 'react';

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

  return (
    <StyledCodeInput showHint={input === ''}>
      <TitleBar title="Input" type="OSX" />
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={filterInput}
        spellCheck={false}
        aria-label="Code Input"
      />
    </StyledCodeInput>
  );
};

export default CodeInput;
