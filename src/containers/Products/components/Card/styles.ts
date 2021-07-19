import styled from "styled-components";

import { Button } from "../../../../components/Button";

interface ICardButton {
  disabled: boolean;
}

export const CardContainer = styled.li`
  width: 100%;
  height: 346px;

  background: var(--color-white);
  border-radius: 15px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;

  object-fit: cover;
`;

export const CardImageShimmer = styled.div`
  width: 100%;
  height: 200px;

  background-color: var(--color-white);
  filter: brightness(95%);

  border-radius: 15px 15px 0 0;

  div {
    border-radius: 15px 15px 0 0;
  }
`;

export const CardContent = styled.div`
  padding: 0 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardInfo = styled.div`
  text-align: center;
  padding: 20px;

  h3 {
    color: var(--color-main-dark);
    font-weight: bold;
  }

  p {
    color: rgba(0, 0, 0, 0.6);
    margin: 5px 0 0 0;
  }
`;

export const CardButton = styled(Button)<ICardButton>`
  background-color: ${({ disabled }) =>
    disabled ? "var(--color-secondary)" : ""};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "var(--color-secondary)" : ""};
  }
`;
