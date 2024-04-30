import "./App.css";
import { ThemeProvider } from "styled-components";
import MainPage from "./pages/CardGamePage";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
