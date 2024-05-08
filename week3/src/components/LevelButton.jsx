/* eslint-disable react/prop-types */
import styled from "styled-components";

function LevelButton({
  setCards,
  setDifficulty,
  difficulty,
  getMixedCardList,
}) {
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
        <Button onClick={handleEasy} $isSelected={"easy" === difficulty}>
          Easy
        </Button>
        <Button onClick={handleNormal} $isSelected={"normal" === difficulty}>
          Normal
        </Button>
        <Button onClick={handleHard} $isSelected={"hard" === difficulty}>
          Hard
        </Button>
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
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.lightPink : theme.colors.lightYellow};
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.skyBlue};
  }
`;

export default LevelButton;
