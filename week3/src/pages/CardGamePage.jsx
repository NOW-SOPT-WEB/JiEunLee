/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled from "styled-components";

function MainPage({ cards, setCards, setScore }) {
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    if (clicked.length === 2) {
      const [first, second] = clicked;
      // 카드 짝이 맞는지 확인
      if (cards[first].id === cards[second].id) {
        // 카드 짝이 맞으면 점수 1추가
        setScore((prevScore) => prevScore + 1);
      } else {
        // 카드가 매치되지 않는 경우 카드를 다시 뒤집기
        const newCards = cards.map((card, index) => {
          return index === first || index === second ? { ...card, status: false } : card;
        });
        setTimeout(() => setCards(newCards), 1000);
      }
      setClicked([]); // 클릭된 카드 초기화
    }
  }, [clicked, cards]);

  const handleClick = (index) => {
    if (!cards[index].status && clicked.length < 2) {
      const newCards = cards.map((card, idx) => (idx === index ? { ...card, status: true } : card));
      setCards(newCards);
      setClicked([...clicked, index]);
    }
  };

  return (
    <>
      <Wrapper>
        <CardWrapper>
          {cards.map((card, index) => (
            <Card key={index} onClick={() => handleClick(index)} status={card.status}>
              <CardInner status={card.status}>
                <CardFront id={card.id} src={card.imgUrl} alt={card.description} />
                <CardBack src="/src/assets/images/backCard/cardBack.png" alt="card's back" />
              </CardInner>
            </Card>
          ))}
        </CardWrapper>
      </Wrapper>
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

// card
const CardWrapper = styled.div`
  display: flex;
  width: 70vw;
  justify-content: center;
  align-items: center;
  gap: 5vw;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 12vw;
  height: 19vh;
  perspective: 1000px;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ status }) => (status ? "rotateY(180deg)" : "rotateY(0)")};
`;

const CardFace = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
`;

const CardFront = styled(CardFace)`
  transform: rotateY(180deg);
`;

const CardBack = styled(CardFace)`
  transform: rotateY(0);
`;

export default MainPage;
