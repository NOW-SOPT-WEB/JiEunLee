/* eslint-disable react/prop-types */
import styled from "styled-components";

function LevelButton({ setCards, setDifficulty, getMixedCardList }) {
  const handleEasy = () => {
    setCards(getMixedCardList(5));
    setDifficulty("easy");
  };

  const handleNormal = () => {
    setCards(getMixedCardList(7));
    setDifficulty("normal");
  };

  const handleHard = () => {
    setCards(getMixedCardList(9));
    setDifficulty("hard");
  };

  return (
    <>
      <ButtonWrapper>
        <EasyBtn onClick={handleEasy}>Easy</EasyBtn>
        <NormalBtn onClick={handleNormal}>Normal</NormalBtn>
        <HardBtn onClick={handleHard}>Hard</HardBtn>
      </ButtonWrapper>
    </>
  );
}

// button
const ButtonWrapper = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  align-items: center;
  margin: 15vh 0 8vh 0;
`;
const EasyBtn = styled.button`
  width: 10vw;
  height: 4vh;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.skyBlue};
  }
`;
const NormalBtn = styled.button`
  width: 10vw;
  height: 4vh;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.skyBlue};
  }
`;
const HardBtn = styled.button`
  width: 10vw;
  height: 4vh;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.skyBlue};
  }
`;
export default LevelButton;
