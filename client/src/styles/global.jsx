import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }
  
  :root {
      font-size: ${px2vw(30)};

      @media (min-width: 768px) {
        font-size: ${px2vw(24)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(18)};
      }
    }
`;

export default Global;
