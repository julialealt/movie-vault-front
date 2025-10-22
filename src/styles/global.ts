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

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme['dark-stroke']};
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme['zinc-900']};
    transition: background-color 0.3s ease-in-out;
    cursor: default;
  }
`