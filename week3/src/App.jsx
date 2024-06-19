import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Header from "./components/header";
import MainPage from "./pages/CardGamePage";
import Modal from "./components/Modal";
import LevelButton from "./components/LevelButton";
import { IMAGEDATA } from "./contants/images";

function App() {
  const [score, setScore] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [cards, setCards] = useState([]);
  const [numPairs, setNumPairs] = useState(5); // 초기 카드 쌍 수 설정

  const getMixedCardList = (numPairs) => {
    const shuffled = [...IMAGEDATA].sort(() => 0.5 - Math.random()); // IMAGEDATA를 복사하여 사용
    const selectedImages = shuffled.slice(0, numPairs);
    setNumPairs(numPairs);
    return [...selectedImages, ...selectedImages].map((card) => ({ ...card, status: false })).sort(() => 0.5 - Math.random());
  };

  // 최초 로드 시 기본 난이도의 카드 세트 로드
  useEffect(() => {
    setCards(getMixedCardList(5)); // Easy 모드 기본 설정
  }, []);

  const resetGame = () => {
    setDifficulty("easy");
    setScore(0);
    setCards(getMixedCardList(5));
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header score={score} setScore={setScore} setCards={setCards} modalVisible={modalVisible} setModalVisible={setModalVisible} numPairs={numPairs} resetGame={resetGame} />
        <LevelButton difficulty={difficulty} setDifficulty={setDifficulty} setCards={setCards} setScore={setScore} getMixedCardList={getMixedCardList} />
        <MainPage cards={cards} setCards={setCards} score={score} setScore={setScore} />
        <Modal setCards={setCards} setScore={setScore} modalVisible={modalVisible} setModalVisible={setModalVisible} resetGame={resetGame} />
      </div>
    </ThemeProvider>
  );
}

export default App;
