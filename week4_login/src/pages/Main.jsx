import React from 'react';
import styled from '@emotion/styled';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import Form from '../components/common/Form';
import Container from '../components/common/Container';

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

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
export default Main;
