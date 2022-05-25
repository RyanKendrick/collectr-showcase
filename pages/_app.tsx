import type { AppProps } from 'next/app'
import '../styles/Header.scss'
import '../styles/globals.scss'
import '../styles/UserInfo.scss'
import '../styles/Collection.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
