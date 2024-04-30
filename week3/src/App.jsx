import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Header from "./components/header";
import MainPage from "./pages/CardGamePage";

function App() {
  const [score, setScore] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header score={score} />
        <MainPage score={score} setScore={setScore} />
      </div>
    </ThemeProvider>
  );
}

export default App;
