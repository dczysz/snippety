import styled from 'styled-components';

const StyledCodeInput = styled.div`
  margin: 4rem 0 2rem 0;
  box-shadow: ${p => p.theme.bs};
  border-radius: ${p => p.theme.br};
  position: relative;

  textarea {
    max-width: 800px;
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
    resize: both;
    margin: 0;

    :focus {
      outline: none;
    }
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
    margin: 8px;
    pointer-events: none;
    opacity: ${p => (p.showHint ? 0.5 : 0)};
    font-size: 1.2rem;
    transition: opacity 0.1s;
  }
`;

export default StyledCodeInput;
