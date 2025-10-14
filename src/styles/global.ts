import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  /* :focus {
    outline: 0;
    border: none;
    box-shadow: 0 0 0 0 transparent;
  } */

  body {
    background-color: ${props => props.theme['zinc-950']};
    color: ${props => props.theme['zinc-300']};
    -webkit-font-smoothing: antialiased;

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`