import React from 'react';
import styled from '@emotion/styled';

function Input(props) {
  const { onChange, ...rest } = props;
  return (
    <>
      <CommonInput onChange={onChange} {...rest} />
    </>
  );
}
const CommonInput = styled.input`
  width: 22rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.darkBeige};
  border-radius: 10px;
`;
export default Input;
