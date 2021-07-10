import styles from './about.module.scss'


export default function Project() {
  return (
    <div className={styles.container}>

      <div className={styles.about}>
        <div className={styles.experienceCard}>
          <h1>EXPERIENCE</h1>
          <div className={styles.line}/>
          <div className={styles.experience}>
            <h2>Lugar .inc</h2>
            <h3>00/00/00</h3>
            <p>dlaspfkasfkpafkpadasfkapf</p>
            <div className={styles.line} />
          </div>
        </div>
        <div className={styles.curseCard}>
          <h1>CURSE</h1>
          <div className={styles.line}/>
          <div className={styles.curse}>
            <h2>Lugar .inc</h2>
            <h3>00/00/00</h3>
            <p>dlaspfkasfkpafkpadasfkapf</p>
            <div className={styles.line} />
          </div>
        </div>
        <div className={styles.contactCard}>
          <h1>CONTACT</h1>
          <div className={styles.line}/>
          <div className={styles.contact}>
            <h2>Lugar .inc</h2>
            <h3>00/00/00</h3>
            <p>dlaspfkasfkpafkpadasfkapf</p>
            <div className={styles.line} />
          </div>
        </div>
      </div>

      <div className={styles.webbook}>
        <h1>WEBBOOKs</h1>
        <p>ksdfoksdaofksoadfksaodfkosadkfosafko</p>

        <div className={styles.searchTag}>
          <input type="text" />
          <img src="/search.svg" alt="search" />
          <div className={styles.lineSearch} />
        </div>

        <div className={styles.projectcard}>
          
          <div className={styles.cardSearch}>
            <h1>Title</h1>
            <h6 className={styles.laguageSearch}>python, javascript</h6>
            <h6 className={styles.dateSearch}>00/00/00</h6>
            <h2 className={styles.descriptionSearch}>Kdasjfosdfksadofsdkfosdgksdoafksf</h2>
            <h5 className={styles.tagSearch}># Coisas, coiasss</h5>
          </div>
        
          <div className={styles.cardSearchSelected}>
            <h1>Title</h1>
            <h6 className={styles.laguageSearch}>python, javascript</h6>
            <h6 className={styles.dateSearch}>00/00/00</h6>
            <h2 className={styles.descriptionSearch}>Kdasjfosdfksadofsdkfosdgksdoafksf</h2>
            <h5 className={styles.tagSearch}># Coisas, coiasss</h5>
          </div>
        </div>


      </div>
    </div>
  )
}