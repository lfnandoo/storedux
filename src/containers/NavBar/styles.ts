import styled from 'styled-components';

const Container = styled.nav`
  max-width: 900px;
  width: 85%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

const RightSide = styled.div`
  min-width: 30%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = {
  Container,
  RightSide,
}