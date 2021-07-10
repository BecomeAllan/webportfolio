import styles from './project.module.scss'

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <h1>Title</h1>
        <div className={styles.card}>
          <div className={styles.topCard}>
            <h6 className={styles.laguage}>python, javascript</h6>
            <h6 className={styles.date}>00/00/00</h6>
          </div>
          <div className={styles.bodyCard}>
            <h2 className={styles.description}>Kdasjfosdfksadofsdkfosdgksdoafksf</h2>
            <h5 className={styles.tag}># Coisas, coiasss</h5>
            <div className={styles.line} />
            <p className={styles.resume}>Coisas, coiasss,cdjojdaosaodja</p>
          </div>
        </div>
      </div>
      <div className={styles.search}>
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