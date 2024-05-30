import { createGlobalStyle } from 'styled-components';
import nav from '../images/rev.jpg';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Sedan SC';
    background: url(${nav.src}) no-repeat center center;
    background-size: cover;
    color: #333;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    background-color: #FFFFFF;
    color: #000000;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: #f0f0f0;
  }
`;

export default GlobalStyle;
