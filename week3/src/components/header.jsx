import styled from "styled-components";
// eslint-disable-next-line react/prop-types
function Header({ score }) {
  return (
    <HeaderWrapper>
      <Title>빈지노 앨범 맞추기</Title>
      <Count>{score}/5</Count>
      <ResetBtn>RESET</ResetBtn>
    </HeaderWrapper>
  );
}

// header
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.purple};
`;
const Title = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.lg};
`;
const Count = styled.p`
  color: ${(props) => props.theme.colors.white};
`;
const ResetBtn = styled.button`
  width: 10vw;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: none;
  border-radius: 30px;
`;
export default Header;
