import React from 'react';
import styled from '@emotion/styled';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import Form from '../components/common/Form';
import { useParams } from 'react-router-dom';

function Main() {
  const memberId = useParams().id;
  return (
    <Form>
      <img src='../src/assets/images/main.jpeg' width={300} alt='main image' />
      <BtnContainer>
        <Link to={`/mypage/${memberId}`}>
          <Button>로그인</Button>
        </Link>
        <Link to='/join'>
          <Button>회원가입</Button>
        </Link>
      </BtnContainer>
    </Form>
  );
}

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
export default Main;
