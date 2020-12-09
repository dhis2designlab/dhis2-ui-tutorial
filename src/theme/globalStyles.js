import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  h1,
  h2,
  h6 {
    text-align: center;
    color: #212934;
  }

  h2 {
    padding-top: 48px;
  }
  
  h3 {
    text-align: left;
    color: #212934;
  }
  
  h4 {
    text-align: center;
    color: #4a5768;
  }
  
  h5 {
    text-align: left;
    color: #212934;
  }
  
  p {
    line-height: 1.2;
    color: #4a5768;
  }
  
  li {
    color: #4a5768;
  }
 

`;

export default GlobalStyle;
