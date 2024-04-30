import "./App.css";
import { ThemeProvider } from "styled-components";
import MainPage from "./pages/CardGamePage";
// import Header from "./components/header";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

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
