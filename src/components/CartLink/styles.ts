import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  position: fixed;
  bottom: 6vh;
  right: 4vw;
  border-radius: 100%;
  padding: 16px 18px 14px 16px;
  background-image: linear-gradient(
    -90deg,
    var(--color-main) 0%,
    var(--color-main-dark) 50%,
    var(--color-main) 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  img {
    width: 40px;
  }
`;
