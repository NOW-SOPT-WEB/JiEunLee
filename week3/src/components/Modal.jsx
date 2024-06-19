/* eslint-disable react/prop-types */
import styled from "styled-components";

function Modal({ modalVisible, setModalVisible, resetGame, setCards, setScore }) {
  const toggleModal = () => {
    if (modalVisible) {
      setModalVisible(false);
      resetGameCards();
    }
  };

  const resetGameCards = () => {
    const newCards = resetGame();
    setCards(newCards);
    setScore(0);
  };

  return (
    <>
      {modalVisible && (
        <ModalBackground>
          <ModalOverlay onClick={toggleModal} />
          <ModalContent>
            <Title>🎊 축하합니다 🎊</Title>
            <RegameBtn onClick={toggleModal}>게임으로 돌아가기</RegameBtn>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
}

// 모달
const Title = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
`;

const ModalBackground = styled.div`
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 350px;
  background-color: ${({ theme }) => theme.colors.lightPink};
  border: 2px solid ${({ theme }) => theme.colors.lightYellow};
  border-radius: 3rem;
`;

const RegameBtn = styled.button`
  width: 10vw;
  height: 4vh;
  margin-top: 5vh;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.skyBlue};
  }
`;

export default Modal;
