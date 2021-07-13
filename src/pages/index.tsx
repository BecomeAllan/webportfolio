import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <h3>HI, I’AM</h3>
        <h2>ALLAN</h2>
        <p>I'm a stats student who loves code and math, which provides innovative ideas about our world. </p>
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
          <p>palavras efsadfdasfs adfdasf sdafdasf sadfdasfsd afsad fsadfdasf sdafdasfsa dfds
            palavras<br /><br />palavras efsadfd asfsadfd asfsdaf dasfsa dfdasfsdaf sad fsadfd asfsdafdasf sadfds
            palavras</p>
        </div>

      </div>
    </div>
  )
}