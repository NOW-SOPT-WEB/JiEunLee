import React from 'react';
import styled from '@emotion/styled';

function Button(props) {
  const { children, ...rest } = props;

  return (
    <ButtonWrapper type='button' {...rest}>
      {children}
    </ButtonWrapper>
  );
}
const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.darkPink};
  border-radius: 10px;
  width: 8rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export default Button;
