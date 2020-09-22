import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html: {
    font-size: 62.5% /* 1rem = 10 */
    height: 100%;
  }
  body: {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.grey};
    text-rendering: optmizeLegibility !important;
    -webkit-font-smoothin: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }
  body, #root {
    min-height: 100vh;
    position: relative;
  }
  body, input, button {
    font: 1.6rem 'Lato', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }
  ul{
    list-style: none;

  }
`;
