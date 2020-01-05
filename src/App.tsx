import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  languageTypes,
  pluginTypes,
  titleBarTypes,
  fontTypes,
} from './store/types';
import { reducer } from './store/reducer';
import { AppContext } from './store/context';
import Preview from './components/Preview';
import Sidebar from './components/Sidebar';
import CodeInput from './components/CodeInput';
import GlobalStyle from './components/styles/GlobalStyle';
import StyledApp from './components/styles/App';
import theme from './components/styles/theme';

export type State = {
  input: string;
  angle: number;
  hue: number;
  saturation: number;
  lightness: number;
  paddingY: number;
  paddingX: number;
  width: number | null;
  height: number | null;
  language: string;
  plugin: string;
  titleBar: string;
  font: string;
};

export const initialState: State = {
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
  titleBar: titleBarTypes.OSX.code,
  font: fontTypes.DEFAULT.code,
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
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
    </AppContext.Provider>
  );
};

export default App;
