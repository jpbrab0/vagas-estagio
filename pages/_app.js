import { createGlobalStyle, ThemeProvider } from 'styled-components'
import "./_app.css"
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Ubuntu;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    whatsapp: "#179848"
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
