import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import {
  FavoriteProvider,
  ThemeProvider,
  ToastProvider
} from '@/src/presentation/providers'
import { CSSReset } from '../presentation/styles/global'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <title>Glity Gif Search</title>
    <ThemeProvider>
      <ToastProvider>
        <FavoriteProvider>
          <CSSReset />
          <Component {...pageProps} />
        </FavoriteProvider>
      </ToastProvider>
    </ThemeProvider>
  </>
)

export default MyApp
