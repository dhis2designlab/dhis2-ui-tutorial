import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  container {
      padding-top: 8px;
      padding-bottom: 8px;
      margin-left: auto;
      margin-right: auto;
  }
  paragraph {
      max-width: 75ch;
  }
`;
 
export default GlobalStyle;