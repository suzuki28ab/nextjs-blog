import 'sanitize.css'
import '../styles/global.css'
import '../styles/article.css'
import { AppProps } from 'next/app'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
