/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";

function Header({
  score,
  modalVisible,
  setModalVisible,
  numPairs,
  resetGame,
  setCards,
  setScore,
}) {
  useEffect(() => {
    if (score === numPairs) {
      toggleModal();
    }
  }, [score]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const resetGamefun = () => {
    const newCards = resetGame();
    setCards(newCards);
    setScore(0);
  };

  return (
    <HeaderWrapper>
      <Title>숨은 앨범커버를 찾아라!</Title>
      <Count>
        {score}/{numPairs}
      </Count>
      <ResetBtn onClick={resetGamefun}>RESET</ResetBtn>
    </HeaderWrapper>
  );
}

// header
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.purple};
`;
const Title = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
`;
const Count = styled.p`
  color: ${(props) => props.theme.colors.white};
`;
const ResetBtn = styled.button`
  position: fixed;
  right: 6px;
  top: 5px;
  height: 50px;
  width: 80px;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  border: none;
  border-radius: 30px;
`;
export default Header;
