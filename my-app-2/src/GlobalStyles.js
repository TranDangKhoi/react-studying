import { createGlobalStyle, css } from "styled-components";
export const GlobalStyles = createGlobalStyle`${css`
  @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@200&family=Lato:wght@300;400&family=Open+Sans:ital,wght@0,400;0,500;1,300;1,400&family=Oswald:wght@200;300;400;500&family=Roboto:ital,wght@0,300;0,400;0,500;1,400&family=Source+Code+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap");

  body {
    font-family: "Poppins", "roboto", sans-serif;
    background: white;
    height: 300vh;
  }
`}`;
