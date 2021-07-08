import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <h3>HI, I’AM  </h3>
        <h2>ALLAN</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum pulvinar ex condimentum tincidunt. Sed sed magna lorem. Aenean lorem risus, aliquam ut rutrum vitae, tempus a mi.</p>
        <h1>programming <br /> skills</h1>
      </div>

      <div className={styles.skill}>

        <div className={styles.cardConteiner}>
          <div className={styles.cardSelect}>
            <h2>python</h2>
            <p>alskfldsfladsflsdakflskadlfkdsalfksa</p>
            <img src="python.svg" alt="PY" />
          </div>
          <div className={styles.card}>
            <h2>R</h2>
            <p>alskfldsfladsflsdakflskadlfkdsalfksa</p>
            <img src="R_logo.svg" alt="R" />
          </div>
          <div className={styles.card}>
            <img src="javascript.svg" alt="JS" />
            <h2>Javascript</h2>
            <p>alskfldsfladsflsdakflskadlfkdsalfksa</p>
          </div>
        </div>

        <div className={styles.introConteiner}>
          <h1>Python</h1>
          <h2>test</h2>
          <p>palavras efsadfdasfsadfdasfsdafdasfsadfdasfsdafsadfsadfdasfsdafdasfsadfds
            palavras<br /><br />palavras efsadfdasfsadfdasfsdafdasfsadfdasfsdafsadfsadfdasfsdafdasfsadfds
            palavras</p>
        </div>

      </div>
    </div>
  )
}