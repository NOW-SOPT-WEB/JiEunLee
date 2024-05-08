/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled from "styled-components";

function MainPage({ cards, setCards, score, setScore }) {
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    if (clicked.length === 2) {
      const [first, second] = clicked;
      // 카드 짝이 맞는지 확인
      if (cards[first].id === cards[second].id) {
        // 카드 짝이 맞으면 점수 1추가
        setScore(score + 1);
      } else {
        // 카드가 매치되지 않는 경우 카드를 다시 뒤집기
        const newCards = cards.map((card, index) => {
          if (index === first || index === second) {
            return { ...card, status: false };
          }
          return card;
        });
        setTimeout(() => setCards(newCards), 1000);
      }
      setClicked([]); // 클릭된 카드 초기화
    }
  }, [clicked, cards, setScore]);

  const handleClick = (index) => {
    if (!cards[index].status && clicked.length < 2) {
      const newCards = cards.map((card, idx) =>
        idx === index ? { ...card, status: true } : card,
      );
      setCards(newCards);
      setClicked([...clicked, index]);
    }
  };

  return (
    <>
      <Wrapper>
        <CardWrapper>
          {cards.map((card, index) => (
            <Card key={index} onClick={() => handleClick(index)}>
              {card.status ? (
                <CardForm>
                  <CardFrontImg
                    id={card.id}
                    src={card.imgUrl}
                    alt={card.description}
                  ></CardFrontImg>
                </CardForm>
              ) : (
                <CardForm>
                  <CardBackImg
                    src="/src/assets/images/backCard/cardBack.png"
                    alt="card's back"
                  ></CardBackImg>
                </CardForm>
              )}
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
  width: 10vw;
  height: 12vh;
`;
const CardFrontImg = styled.img`
  width: 12vw;
  height: 19vh;
`;
const CardForm = styled.div`
  width: 12vw;
  height: 19vh;
`;

const CardBackImg = styled.img`
  width: 12vw;
  height: 19vh;
`;
export default MainPage;
