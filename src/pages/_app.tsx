import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from '@/src/presentation/providers'
import { CSSReset } from '../presentation/styles/global'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider>
    <CSSReset />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
