
// import Link from 'next/link'

import { useState } from 'react'
import styles from './styles.module.scss'

type Cardprops = {
  selected: number
  value: number
  onChange: (number: number) => void
}

export function Card({ selected, value, onChange }: Cardprops) {

  return (
    <div className={styles.container}>

      <div onClick={() => onChange(value)} className={value === selected ? styles.cardSearchSelected : styles.cardSearch}>

        <div className={styles.topCardSearch}>
          <h6 className={styles.laguageSearch}>python, javascriptaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h6>
          <h6 className={styles.dateSearch}>00/00/00</h6>
        </div>

        <div className={styles.titleSearch}><h1>Titles</h1></div>
        <div className={styles.descriptionSearch}><h2>Kdasjfosdfksadofsdkfosdgksdoafksf</h2></div>
        <div className={styles.tagSearch}><h5># Coisas, coiasss</h5></div>

      </div>
    </div>
  )
}