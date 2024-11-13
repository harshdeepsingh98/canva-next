import 'styles/global/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle />{' '} */}
      {/* Apply global styles if you created a globalStyles.ts file */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
