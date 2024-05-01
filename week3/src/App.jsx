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
    // 모든 카드 이미지 중에서 게임에 사용할 이미지를 무작위로 선택
    const shuffled = IMAGEDATA.sort(() => 0.5 - Math.random());
    const selectedImages = shuffled.slice(0, 5);

    // 5개를 두번씩 사용하여 10개의 카드 데이터 생성
    return [...selectedImages, ...selectedImages]
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
          setScore={setScore}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          resetGame={getMixedCardList}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
