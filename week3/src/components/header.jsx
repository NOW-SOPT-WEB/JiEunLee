// import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <Title>라이언 일병 맞추기</Title>
        <Count>0/5</Count>
        <ResetBtn>RESET</ResetBtn>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
`;
const Title = styled.p``;
const Count = styled.p``;
const ResetBtn = styled.button`
  width: 10vw;
`;
