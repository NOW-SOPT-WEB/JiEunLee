import React from 'react';
import styled from '@emotion/styled';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <Container>
      <Form>
        <img
          src='../src/assets/images/main.jpeg'
          width={300}
          alt='main image'
        />
        <BtnContainer>
          <Link to='/'>
            <Button>로그인</Button>
          </Link>
          <Link to='/join'>
            <Button>회원가입</Button>
          </Link>
        </BtnContainer>
      </Form>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.div`
  gap: 3rem;
  display: flex;
  width: 50vw;
  height: 70vh;
  border: 1px solid ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightPink};
`;
const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
export default Main;
