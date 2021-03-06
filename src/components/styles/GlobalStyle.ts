import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DejaVu Sans Mono';
    src: local('DejaVu Sans Mono'),
      url('../../assets/fonts/DejaVuSansMono.ttf');
  }

  html,
  body {
    box-sizing: border-box;
  }

  ::selection {
    color: hsl(${p => p.theme.gray});
    background-color: hsl(${p => p.theme.lighterGray});
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
    font-family: Consolas, Monaco, 'Lucida Console', 'Andale Mono', 'Ubuntu Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
