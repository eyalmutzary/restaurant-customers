import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Baloo Thambi 2';
  font-style: normal;
  font-weight: 400;
  src: url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;700&display=swap'); /* IE9 Compat Modes */
}

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Baloo Thambi 2', cursive;
    /* font-family: "Segoe UI", sans-serif; */
  }

  
`;

export default GlobalStyle;
