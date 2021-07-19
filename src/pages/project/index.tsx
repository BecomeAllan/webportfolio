import styles from './project.module.scss'
import { Card } from '../../components/Card'
import { useState } from 'react'
import Head from 'next/head'

export default function Project() {
  const [selected, setSelected] = useState(0)

  function funSelected(value: number) {
    setSelected(value)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>
          BecomeAllan | Project
        </title>
      </Head>
      <div className={styles.project}>
        <h1>Title Coisas, coiasss,cdjojdaosaodjaKdasjf</h1>
        <div className={styles.card}>
          <div className={styles.topCard}>
            <h6 className={styles.laguage}>python, javascript Coisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss</h6>
            <h6 className={styles.date}>00/00/00</h6>
          </div>
          <div className={styles.bodyCard}>
            <h2 className={styles.description}>Kdasjfosdfksadofsdkfosdgksdoafksf KdasjfosdfksadofsdkfosdgksdoafksfKdasjfosdfksadofsdkfosdgksdoafksfKdasjfosdfksadofsdkfosdgksdoafksf Kdasjfosdfksadofsdkfosdgksdoafksf</h2>
            <h5 className={styles.tag}># Coisas, coiasss Coisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas,</h5>
            <div className={styles.line} />
            <p className={styles.resume}>Coisas, coiasss,cdjojdaosaodjaKdasjfo
              Coisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksfCoisas, coiasss,cdjojdaosaodjaKdasjfosdfksadofsdkfosdgksdoafksf</p>
          </div>
        </div>
      </div>
      <div className={styles.search}>
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

          <Card value={0} selected={selected} onChange={funSelected} />
          <Card value={1} selected={selected} onChange={funSelected} />
          <Card value={2} selected={selected} onChange={funSelected} />

        </div>

      </div>
    </div>
  )

}