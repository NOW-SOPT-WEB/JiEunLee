import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { IMAGEDATA } from "../contants/images";

// eslint-disable-next-line react/prop-types
function MainPage({ score, setScore }) {
  const getMixedCardList = () => {
    return [...IMAGEDATA, ...IMAGEDATA]
      .map((card) => ({ ...card, status: false }))
      .sort(() => 0.5 - Math.random());
  };

  const [cards, setCards] = useState(useMemo(getMixedCardList, []));
  const [clicked, setClicked] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (clicked.length === 2) {
      const [first, second] = clicked;
      if (cards[first].id !== cards[second].id) {
        const newCards = cards.map((card, index) => {
          if (index === first || index === second) {
            return { ...card, status: false };
          }
          return card;
        });
        setTimeout(() => setCards(newCards), 1000);
      } else {
        if (score < 5) {
          setScore(score + 1);
          if (score == 5) {
            toggleModal();
          }
        }
      }
      setClicked([]);
    }
  }, [clicked, cards]);

  const handleClick = (index) => {
    if (!cards[index].status && clicked.length < 2) {
      const newCards = cards.map((card, idx) =>
        idx === index ? { ...card, status: true } : card,
      );
      setCards(newCards);
      setClicked([...clicked, index]);
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <ButtonWrapper>
        <EasyBtn>Easy</EasyBtn>
        <NormalBtn>Normal</NormalBtn>
        <HardBtn>Hard</HardBtn>
      </ButtonWrapper>
      <Wrapper>
        <CardWrapper>
          {cards.map((card, index) => (
            <Card key={index} onClick={() => handleClick(index)}>
              {card.status ? (
                <CardFront>
                  <CardFrontImg
                    id={card.id}
                    src={card.imgUrl}
                    alt={card.description}
                  ></CardFrontImg>
                </CardFront>
              ) : (
                <CardBack>
                  <CardBackImg
                    src="/src/assets/images/backCard/cardBack.png"
                    alt="card's back"
                  ></CardBackImg>
                </CardBack>
              )}
            </Card>
          ))}
        </CardWrapper>
      </Wrapper>
      {modalVisible && (
        <ModalWrapper>
          <ModalDiv>
            <Title>축하합니다</Title>
            <RegameBtn onClick={toggleModal}>게임으로 돌아가기</RegameBtn>
          </ModalDiv>
        </ModalWrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
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

// button
const ButtonWrapper = styled.div`
  display: flex;
  gap: 2vw;
`;
const EasyBtn = styled.button`
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
const NormalBtn = styled.button`
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
const HardBtn = styled.button`
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

// card
const CardWrapper = styled.div`
  display: flex;
  width: 70vw;
  justify-content: center;
  align-items: center;
  gap: 10vw;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 10vw;
  height: 12vh;
`;
const CardFrontImg = styled.img`
  width: 12vw;
  height: 19vh;
`;
const CardFront = styled.div`
  width: 12vw;
  height: 19vh;
`;
const CardBack = styled.div`
  width: 12vw;
  height: 19vh;
`;

const CardBackImg = styled.img`
  width: 12vw;
  height: 19vh;
`;
export default MainPage;
