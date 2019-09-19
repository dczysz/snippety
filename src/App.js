import React, { useReducer, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { languageTypes } from './store/types';
import { reducer } from './store/reducer';
import { AppContext } from './store/context';
import Preview from './components/Preview';
import Sidebar from './components/Sidebar';
import CodeInput from './components/CodeInput';

const theme = {
  sidebarWidth: 300,
  br: '4px',
  white: '60, 30%, 96%',
  black: '70, 8%, 15%',
  gray: '220, 13%, 18%',
  lightGray: '220, 13%, 32%',
  bs: '0 4px 32px #27282288, 0 4px 8px #272822aa', //TODO update after initialization like bg
  titleBarHeight: '1.75rem',
};
theme.bg = theme.lightGray.slice();

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  height: 100vh;

  main {
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
  }
`;

const initialState = {
  input: `const app = () => {\n  console.log('test');\n};`,
  angle: 10,
  hue: 250,
  saturation: 100,
  lightness: 50,
  paddingY: 100,
  paddingX: 100,
  ratio: null,
  language: languageTypes.JS.code,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //! Temporary, move to head of index.html(?) when colors are finalized
  useEffect(() => {
    if (theme.bg) document.body.style.backgroundColor = `hsl(${theme.bg})`;
  }, []);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <main>
            <CodeInput />
            <Preview />
          </main>
          <Sidebar />
        </StyledApp>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
