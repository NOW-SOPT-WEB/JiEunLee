import styled from '@emotion/styled';

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
  margin-left: 25%;
  margin-top: 5%;
`;

export default Form;
