import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../styles/themes/default"
import { BrowserRouter } from "react-router"
import { Router } from "../routes/router"
import { GlobalStyle } from "../styles/global"

export function App() {
  const theme = defaultTheme

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}