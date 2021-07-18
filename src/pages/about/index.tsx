import styles from './about.module.scss'


export default function Project() {
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

          <div className={styles.cardSearch}>

            <div className={styles.topCardSearch}>
              <h6 className={styles.laguageSearch}>python, javascriptaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h6>
              <h6 className={styles.dateSearch}>00/00/00</h6>
            </div>

            <h1 className={styles.titleSearch}>Title</h1>
            <h2 className={styles.descriptionSearch}>Kdasjfosdfksadofsdkfosdgksdoafksf</h2>
            <h5 className={styles.tagSearch}># Coisas, coiasss</h5>

          </div>
          <div className={styles.cardSearch}>

            <div className={styles.topCardSearch}>
              <h6 className={styles.laguageSearch}>python, javascriptaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h6>
              <h6 className={styles.dateSearch}>00/00/00</h6>
            </div>

            <h1 className={styles.titleSearch}>Title</h1>
            <h2 className={styles.descriptionSearch}>Kdasjfosdfksadofsdkfosdgksdoafksf</h2>
            <h5 className={styles.tagSearch}># Coisas, coiasss</h5>

          </div>
          <div className={styles.cardSearch}>

            <div className={styles.topCardSearch}>
              <h6 className={styles.laguageSearch}>python, javascriptaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h6>
              <h6 className={styles.dateSearch}>00/00/00</h6>
            </div>

            <h1 className={styles.titleSearch}>Title</h1>
            <h2 className={styles.descriptionSearch}>Kdasjfosdfksadofsdkfosdgksdoafksf</h2>
            <h5 className={styles.tagSearch}># Coisas, coiasss</h5>

          </div>
          <div className={styles.cardSearch}>

            <div className={styles.topCardSearch}>
              <h6 className={styles.laguageSearch}>python, javascriptaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h6>
              <h6 className={styles.dateSearch}>00/00/00</h6>
            </div>

            <h1 className={styles.titleSearch}>Title</h1>
            <h2 className={styles.descriptionSearch}>Kdasjfosdfksadofsdkfosdgksdoafksf</h2>
            <h5 className={styles.tagSearch}># Coisas, coiasss</h5>

          </div>

          <div className={styles.cardSearchSelected}>

            <div className={styles.topCardSearch}>
              <h6 className={styles.laguageSearch}>python, javascript</h6>
              <h6 className={styles.dateSearch}>00/00/00</h6>
            </div>
            <h1 className={styles.titleSearch}>Titlefsfasadfsadfsfsfsadfasdfsa</h1>
            <h2 className={styles.descriptionSearch}>
              Kdasjfosdfksadofsdkfosdgksdoafksf Kdasjfosdfksadofsdkfosdgk
              sdoafksfKdasjfosdfksadofsdkfosdgksdoafksfKdasjfo
              sdfksadofsdkfosdgksdoafksfKdasjfosdfksadofsdkfosdgksdoafksfKd
              asjfosdfksadofsdkfosdgksdoafksf
            </h2>
            <h5 className={styles.tagSearch}># Coisas, coiasssfsdfsadfadsfsadfadsfsadfadsfsdafsaf</h5>
          </div>
        </div>


      </div>
    </div>
  )
}