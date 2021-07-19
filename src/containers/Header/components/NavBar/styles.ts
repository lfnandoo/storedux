import styled from "styled-components";

const Container = styled.nav`
  max-width: 900px;
  width: 85%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const RightSide = styled.div`
  min-width: 30%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    margin-right: 10px;
  }
`;

export const Nav = {
  Container,
  RightSide,
};
