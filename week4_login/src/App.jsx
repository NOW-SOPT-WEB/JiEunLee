import { ThemeProvider } from '@emotion/react';
import './App.css';
import { React, useState } from 'react';
import Login from './pages/Login';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Join from './pages/Join';
import Router from '../Router';
import Main from './pages/Main';
import MyPage from './pages/MyPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Main />
        <Login />
        <MyPage />
        <Join />
      </Router>
    </ThemeProvider>
  );
}

export default App;
