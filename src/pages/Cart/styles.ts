import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 60vh;
  max-width: 900px;
  margin: auto;

  > h1 {
    color: var(--color-secondary);
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;

  padding: 5vh 0;
`;
