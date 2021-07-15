import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #dedede;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    background-color: #dedede;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  h3 {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1rem;
    font-weight: normal;
  }

  strong {
    color: #73a2da;
  }

  button {
    padding: 15px 20px;

    background-color: #ff9696;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    border: 1px solid transparent;
    cursor: pointer;
  }

  button:hover {
    color: #ff9696;
    border: 1px solid #ff9696;
    background-color: transparent;
    transition: 0.3s all;
  }
`;