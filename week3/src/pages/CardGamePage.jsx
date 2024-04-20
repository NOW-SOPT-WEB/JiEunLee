import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";

const GAMEDATA = [
  { id: 1, imgUrl: "/card/12.webp" },
  { id: 2, imgUrl: "/card/2426.webp" },
  { id: 3, imgUrl: "/card/lifeInColors.jpeg" },
  { id: 4, imgUrl: "/card/lifeslike.jpeg" },
  { id: 5, imgUrl: "/card/nowitzki.webp" },
  { id: 6, imgUrl: "/card/WeAreGoingTo.jpeg" },
  { id: 7, imgUrl: "/card/waves.jpeg" },
  { id: 8, imgUrl: "/card/soWhat.jpeg" },
  { id: 9, imgUrl: "/card/daliVan.jpeg" },
  { id: 10, imgUrl: "/card/always.jpeg" },
];

function MainPage() {
  const getMixedCardList = () => {
    return [...GAMEDATA, ...GAMEDATA]
      .map((card) => ({ ...card, status: false })) // 각 카드에 status 추가
      .sort(() => 0.5 - Math.random());
  };

  const [cards, setCards] = useState(useMemo(getMixedCardList, []));
  const [clicked, setClicked] = useState([]);

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

  return (
    <CardWrapper>
      {cards.map((card, index) => (
        <Card key={index} onClick={() => handleClick(index)}>
          {card.status ? (
            <CardFront>
              <CardFrontImg src={card.imgUrl} alt={card.id}></CardFrontImg>
            </CardFront>
          ) : (
            <CardBack>
              <CardBackImg
                src="/card/cardBack.png"
                alt="card's back"
              ></CardBackImg>
            </CardBack>
          )}
        </Card>
      ))}
    </CardWrapper>
  );
}

// button
// const ButtonWrapper = styled.div`
//   width: 20px;
// `;
// const EasyBtn = styled.button`
//   width: 20px;
// `;
// const NormalBtn = styled.button`
//   width: 20px;
// `;
// const HardBtn = styled.button`
//   width: 20px;
// `;

// card
const CardWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
const Card = styled.div`
  width: 20px;
`;
const CardFrontImg = styled.img`
  width: 5vw;
  height: 10vh;
`;
const CardFront = styled.div`
  /* width: 20px; */
  background-color: rebeccapurple;
  width: 5vw;
  height: 10vh;
`;
const CardBack = styled.div`
  /* width: 20px; */
  background-color: aliceblue;
  width: 5vw;
  height: 10vh;
`;

const CardBackImg = styled.img`
  width: 5vw;
  height: 10vh;
`;
export default MainPage;
