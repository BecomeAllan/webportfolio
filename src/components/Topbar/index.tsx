import styles from './styles.module.scss'

export function Topbar() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="">
            HOME
          <div className={styles.selected} />
          </a>
        </li>
        <li>
          <a href="">
            PROJECT
          </a>
        </li>
        <li>
          <a href="">
            ABOUT
          </a>
        </li>
      </ul>
    </div>
  )
}