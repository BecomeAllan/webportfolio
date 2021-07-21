
// import Link from 'next/link'

// import { useState } from 'react'
import { repoDataProps } from '../../pages/project'
import styles from './styles.module.scss'

type Cardprops = {
  value: number
  selected: number
  onChange: (data: repoDataProps) => void,
  data: repoDataProps,
  // tag?: string[]
}

export function Card({ value, selected, onChange, data }: Cardprops) {
  const {description, languages, name, tags} = data


  return (
    <div className={styles.container} key={value}>

      <div onClick={() => onChange(data)} className={value === selected ? styles.cardSearchSelected : styles.cardSearch}>

        <div className={styles.topCardSearch}>
          <h6 className={styles.laguageSearch}>{languages.join(', ')}</h6>
          <h6 className={styles.dateSearch}>{data.updated_at}</h6>
        </div>

        <div className={styles.titleSearch}><h1>{name}</h1></div>
        <div className={styles.descriptionSearch}><h2>{description}</h2></div>
        <div className={styles.tagSearch}><h5>{tags?.join(' ')}</h5></div>

      </div>
    </div>
  )
}