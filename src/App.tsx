import React from 'react';
import { ThemeProvider } from 'styled-components';

import Preview from './components/Preview';
import Sidebar from './components/Sidebar';
import CodeInput from './components/CodeInput';
import StyledApp from './components/styles/App';
import GlobalStyle from './components/styles/GlobalStyle';
import theme from './components/styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <StyledApp>
      <GlobalStyle />
      <main>
        <CodeInput />
        <Preview />
      </main>
      <Sidebar />
    </StyledApp>
  </ThemeProvider>
);

export default App;
