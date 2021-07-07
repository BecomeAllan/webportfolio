import styles from './styles.module.scss'

export function Leftbar() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <a href="">
          HO <br />
          ME
        </a>
      </div>
      <div className={styles.sources}>
        <a href="">
          <img src="/email.svg" alt="email" />
        </a>
        <a href="">
          <img src="/github.svg" alt="github" />
        </a>
        <a href="">
          <img src="/linkedin.svg" alt="linkedin" />
        </a>
      </div>
    </div>
  )
}