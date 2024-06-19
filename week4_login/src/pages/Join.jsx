import React from 'react';
import styled from '@emotion/styled';

import Form from '../components/common/Form';
import Container from '../components/common/Container';
import JoinForm from '../components/join/JoinForm';

function Join() {
  return (
    <Form>
      <Title>회원가입</Title>
      <JoinForm />
    </Form>
  );
}

const Title = styled.p`
  font-size: 2rem;
`;

export default Join;
