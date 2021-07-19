import styled from 'styled-components';
import { Button as DefaultButton } from "../../components/Button";

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

    @media(max-width: 600px) {
      flex-direction: column;

    }
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  max-height: 60vh;
  overflow: auto;

  @media(max-width: 600px) {
    width: 100%;
  }
`;

export const Checkout = styled.div`
  flex: 1;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 600px) {
    margin: 2.5vh 0;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    background-color: var(--color-secondary);
    color: white;
  }
`;

export const Button = styled(DefaultButton)`
  width: 100%;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
`