
// import Link from 'next/link'

// import { useState } from 'react'
import { repoDataProps } from '../../pages/project'
import styles from './styles.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import gfm from 'remark-gfm'
import { useEffect, useState } from 'react'
import { prefix } from '../../../services/apis'

type Mdcard = {
  selectedData: selectedCard
}

type selectedCard = {
  selected: number,
  languages: string[],
  date: string,
  title: string,
  description?: string,
  branchSelected: string,
  Url: string,
  htags?: string[]
}

export function MdCard({ selectedData }: Mdcard) {
  const [readme, setReadme] = useState('')

  const { Url, date, title, description, languages, htags, branchSelected, selected } = selectedData

  useEffect(() => {
    async function load() {
      const md = await fetch(`https://raw.githubusercontent.com/BecomeAllan/${title}/${branchSelected}/README.md`)
      const mdFile = await md.text()
      // console.log(mdFile);

      // mdFile.replace('![arq](images/Aquitetura.png)')

      return setReadme(mdFile)
    }

    load()
    // console.log("MUDEI aq Md");
  }, [selected])

  return (
    <div className={styles.project}>
      <a href={Url}>
        <h1>{title}</h1>
      </a>
      <div className={styles.card}>
        <div className={styles.topCard}>
          <h6 className={styles.laguage}>{languages?.join(", ")}</h6>
          <h6 className={styles.date}>{date}</h6>
        </div>

        <div className={styles.bodyCard}>
          <h2 className={styles.description}>{description}</h2>

          <div className= {styles.topbottomcard}>
            <h5 className={styles.tag}>{htags?.join(" ")}</h5>
            <div>
            <a href={Url}>
              <img src={prefix + "/github.svg"} alt="github" />
            </a>
            </div>
          </div>

          <div className={styles.line} />
          <div className={styles.resume}>

            <ReactMarkdown
              remarkPlugins={[gfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
              children={readme} />
          </div>
        </div>
      </div>
    </div>

  )
}