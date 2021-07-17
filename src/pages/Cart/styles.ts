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

  > section {
    display: flex;
    width: 85%;
    margin: 2.5vh 0;
    padding: 2.5vh 0;
    border-top: 1px solid var(--color-white);
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  max-height: 60vh;
  overflow: auto;
`;

export const Checkout = styled.div`
  flex: 1;
  margin: 0 20px;

  button {
    width: 100%;
  }
`;
