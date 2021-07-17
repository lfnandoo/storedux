import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #f5f5f5;
    --color-white: #fff;
    --color-main: #ff9696;
    --color-main-dark: #d14646;
    --color-secondary: #73a2da;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    background-color: var(--color-background);
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
    color: var(--color-secondary);
  }
`;