/* eslint-disable react/prop-types */
// import React from "react";
import styled from "styled-components";

function Modal({
  modalVisible,
  setModalVisible,
  resetGame,
  setCards,
  setScore,
}) {
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
        <ModalWrapper>
          <ModalDiv>
            <Title>축하합니다</Title>
            <RegameBtn onClick={toggleModal}>게임으로 돌아가기</RegameBtn>
          </ModalDiv>
        </ModalWrapper>
      )}
      ;
    </>
  );
}

// 모달

const Title = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.lg};
`;

const ModalWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.black}; */
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 300px;
  left: 550px;
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 350px;
  background-color: ${({ theme }) => theme.colors.skyBlue};
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
