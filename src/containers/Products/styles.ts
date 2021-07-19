import styled from "styled-components";

export const ProductsList = styled.ul`
  max-width: 900px;
  width: 80%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  list-style-type: none;
`;
