import {Leftbar} from '../components/Leftbar'
import {Topbar} from '../components/Topbar'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className={styles.wrapper}>
    <Leftbar/>
    <Topbar/>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp