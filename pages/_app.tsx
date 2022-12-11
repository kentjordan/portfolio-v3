import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '@components/footer/Footer'
import NavMenu from '@components/nav_menu/NavMenu'

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <NavMenu />
    <Component {...pageProps} />
    <Footer />
  </>
}
