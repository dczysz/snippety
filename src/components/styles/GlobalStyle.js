import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: inherit;
  }

  body {
    margin: 0;
  }
  
  body,
  pre,
  code,
  textarea {
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
