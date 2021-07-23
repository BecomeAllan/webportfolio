import { Leftbar } from '../components/Leftbar'
import { Topbar } from '../components/Topbar'
import Head from 'next/head'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
    </>
  )
}

export default MyApp