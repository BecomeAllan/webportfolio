
// import Link from 'next/link'

// import { useState } from 'react'
import Link from 'next/link'
import { repoDataProps } from '../../pages/project'
import styles from './styles.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'
import api from "axios"
import { baseUrl, prefix } from '../../../services/apis'

type Cardprops = {
  value: number
  selected: number
  onChange: (data: repoDataProps) => void,
  data: repoDataProps,
  show: boolean
  // tag?: string[]
}

export function Card({ value, selected, onChange, data, show }: Cardprops) {
  const { description, languages, name, tags } = data

  if (show) {
    return (
      <div key={value}>

        <Link href={`/project/${data.name}`}>
          <a className={styles.container}>
            <div onClick={() => onChange(data)} className={value === selected ? styles.cardSearchSelected : styles.cardSearch}>

              <div className={styles.topCardSearch}>
                <h6 className={styles.laguageSearch}>{languages.join(', ')}</h6>
                <h6 className={styles.dateSearch}>{data.updated_at}</h6>
              </div>

              <div className={styles.titleSearch}><h1>{name}</h1></div>
              <div className={styles.descriptionSearch}><h2>{description}</h2></div>
              <div className={styles.tagSearch}><h5>{tags?.join(' ')}</h5></div>

            </div>
          </a>
        </Link>
      </div>
    )
  } else {
    return <></>
  }


}

export const getStaticPaths :GetStaticPaths = async (ctx) => {
  
  const repos = await api.get(baseUrl + '/server/repos.json')

  const reposList = repos.data

  // reposList.map
  // console.log(ctx.params)

  const paths = reposList.map((repo :any) => {
    return {
      params: {
        proj: repo.name
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}