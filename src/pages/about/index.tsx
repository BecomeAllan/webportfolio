import { useState } from 'react'
import { Card } from '../../components/Card'
import styles from './about.module.scss'


export default function About() {
  const [selected, setSelected] = useState(0)

  function funSelected(value: number) {
    setSelected(value)
  }
  
  return (
    <div className={styles.container}>

      <div className={styles.about}>
        <div className={styles.experienceCard}>
          <h1>EXPERIENCE</h1>
          <div className={styles.line} />
          <div className={styles.experience}>

            <div className={styles.topInfo}>
              <h2>Lugar .inc fjsdfjsdaifjsaifj fjsdifjsaifjsai fshfhadsifhadsif fhsdifhiashfaisf  </h2>
              <h3>00/00/00</h3>
            </div>
            <p>dlaspfkasfkpafkpadasfkapf dlaspfkasfkpafkpadasfkapf dlaspfkasfkpafkpadasfkapfdlaspfkasfkpafkpadasfkapf</p>
            <div className={styles.line} />

          </div>
        </div>
        <div className={styles.curseCard}>
          <h1>CURSE</h1>
          <div className={styles.line} />
          <div className={styles.curse}>

            <div className={styles.topInfo}>
              <h2>Lugar .inc fjsdfjsdaifjsaifj fjsdifjsaifjsai fshfhadsifhadsif fhsdifhiashfaisf  </h2>
              <h3>00/00/00</h3>
            </div>
            <p>dlaspfkasfkpafkpadasfkapf dlaspfkasfkpafkpadasfkapf dlaspfkasfkpafkpadasfkapfdlaspfkasfkpafkpadasfkapf</p>
            <div className={styles.line} />

          </div>
        </div>
        <div className={styles.contactCard}>
          <h1>CONTACT</h1>
          <div className={styles.line} />
          <div className={styles.contact}>

            <h2>Email</h2>
            <p>dlaspfkasfkpafkpadasfkapfdlaspfkasfk@email.com</p>
            <div className={styles.line} />

            <h2>Telephone</h2>
            <p>+555(99)99999999</p>
            <div className={styles.line} />

          </div>
        </div>
      </div>

      <div className={styles.webbook}>
        <h1>WEBBOOKs</h1>
        <p>ksdfoksdaofksoadfksaodfkosadkfosafko</p>

        <div className={styles.searchTag}>
          <form action="" method="get">
            <input type="text" />
            <button type='submit'>
              <img src="/search.svg" alt="search" />
            </button>
          </form>
          <div className={styles.lineSearch} />
        </div>

        <div className={styles.projectcard}>

          <Card value={5} selected={selected} onChange={funSelected} />
          <Card value={6} selected={selected} onChange={funSelected} />
          <Card value={7} selected={selected} onChange={funSelected} />

        </div>
      </div>
    </div>
  )
}