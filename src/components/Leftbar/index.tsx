import styles from './styles.module.scss'

export function Leftbar() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <a href="/">
          HO <br/>ME
        </a>
      </div>
      <div className={styles.sources}>
        <a href="mailto:allanvictor.almeida@gmail.com">
          <img src="/email.svg" alt="email" />
        </a>
        <a href="https://github.com/BecomeAllan">
          <img src="/github.svg" alt="github" />
        </a>
        <a href="https://linkedin.com/in/allan-faria-33b0a790">
          <img src="/linkedin.svg" alt="linkedin" />
        </a>
      </div>
    </div>
  )
}