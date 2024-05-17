import { ThemeProvider } from '@emotion/react';
import { React } from 'react';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Router from '../Router';
import Container from './components/common/Container';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <Container />
    </ThemeProvider>
  );
}

export default App;
