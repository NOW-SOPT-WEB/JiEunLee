import "./App.css";
import MainPage from "./pages/CardGamePage";
import Header from "./components/header";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <div>
        <GlobalStyle />
        <Header />
        <MainPage />
      </div>
    </>
  );
}

export default App;
