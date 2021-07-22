import {prefix} from '../../../services/apis'

import Link from 'next/link'

import styles from './styles.module.scss'

export function Leftbar() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Link href="/">
        <a>
          HO <br/>ME
        </a>
        </Link>
      </div>
      <div className={styles.sources}>
        <a href="mailto:allanvictor.almeida@gmail.com">
          <img src={prefix + "/email.svg"} alt="email" />
        </a>
        <a href="https://github.com/BecomeAllan">
          <img src={prefix + "/github.svg"} alt="github" />
        </a>
        <a href="https://linkedin.com/in/allan-faria-33b0a790">
          <img src={prefix + "/linkedin.svg"} alt="linkedin" />
        </a>
      </div>
    </div>
  )
}