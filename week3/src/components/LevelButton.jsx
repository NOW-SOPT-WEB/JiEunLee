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
        <EasyButton onClick={handleEasy}>Easy</EasyButton>
        <NormalButton onClick={handleNormal}>Normal</NormalButton>
        <HardButton onClick={handleHard}>Hard</HardButton>
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

const Button = styled.button`
  width: 10vw;
  height: 4vh;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.skyBlue};
  }
`;

const EasyButton = styled(Button)``;
const NormalButton = styled(Button)``;
const HardButton = styled(Button)``;
export default LevelButton;
