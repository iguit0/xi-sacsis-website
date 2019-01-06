import { createGlobalStyle } from "styled-components";

// from node_modules
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";

// from assets/css
import '../assets/css/style.css';
import '../assets/css/helper.min.css';

createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
body, html {
  background: #eee;
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
`;
