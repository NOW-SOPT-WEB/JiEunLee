import { ThemeProvider } from '@emotion/react';
import './App.css';
import * as React from 'react';
import Login from './pages/Login';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

import Router from '../Router';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Login />
      <Router>
      </Router>
    </ThemeProvider>
  );
}

export default App;
