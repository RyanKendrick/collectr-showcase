import type { AppProps } from 'next/app'
import '../styles/Header.scss'
import '../styles/globals.scss'
import '../styles/UserProfile.scss'
import '../styles/Collection.scss'
import '../styles/ProductCard.scss'
import '../styles/CollectionSkeleton.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
