import Link from 'next/link'

import styles from './styles.module.scss'

export function Topbar() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/">
          <a >
            HOME
          <div className={styles.selected} />
          </a>
          </Link>
        </li>
        <li>
        <Link href="/project">
          <a>
            PROJECT
          </a>
        </Link>
        </li>
        <li>
          <Link href="about">
          <a>
            ABOUT
          </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}