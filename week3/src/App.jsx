import { useState, useMemo } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Header from "./components/header";
import MainPage from "./pages/CardGamePage";
import Modal from "./components/Modal";
import { IMAGEDATA } from "./contants/images";

function App() {
  const [score, setScore] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const getMixedCardList = () => {
    return [...IMAGEDATA, ...IMAGEDATA]
      .map((card) => ({ ...card, status: false }))
      .sort(() => 0.5 - Math.random());
  };

  const [cards, setCards] = useState(useMemo(getMixedCardList, []));

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header
          score={score}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <MainPage
          cards={cards}
          setCards={setCards}
          score={score}
          setScore={setScore}
        />
        <Modal
          setCards={setCards}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          resetGame={getMixedCardList}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
