import React, { useReducer, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { languageTypes, pluginTypes } from './store/types';
import { reducer } from './store/reducer';
import { AppContext } from './store/context';
import Preview from './components/Preview';
import Sidebar from './components/Sidebar';
import CodeInput from './components/CodeInput';

const theme = {
  sidebarWidth: 300,
  br: '4px',
  white: '220, 10%, 90%',
  gray: '220, 13%, 18%',
  lightGray: '220, 15%, 29%',
  lighterGray: '220, 16%, 60%',
  titleBarHeight: '1.75rem',
};
theme.bg = theme.lightGray.slice();
theme.bs = `0 4px 32px hsla(${theme.gray}, 0.9), 0 4px 8px hsla(${theme.gray}, 0.75)`;

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  height: 100vh;

  main {
    margin: 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const initialState = {
  input: '',
  angle: 10,
  hue: 250,
  saturation: 100,
  lightness: 50,
  paddingY: 100,
  paddingX: 100,
  width: null,
  height: null,
  language: languageTypes.JS.code,
  plugin: pluginTypes.LINE_NUMBERS.code,
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
