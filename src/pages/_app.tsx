import { Leftbar } from '../components/Leftbar'
import { Topbar } from '../components/Topbar'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Leftbar}>
        <Leftbar />
      </div>
      <div className={styles.TopBar}>
        <Topbar />
      </div>
      <div className={styles.page}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp