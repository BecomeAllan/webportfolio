
import { repoDataProps } from '../../pages/project'
import styles from './styles.module.scss'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';


import gfm from 'remark-gfm'
import { useEffect, useState } from 'react'
import { prefix } from '../../../services/apis'
import agate from 'react-syntax-highlighter/dist/esm/styles/hljs/agate'

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

  // console.log(selectedData);
  const { Url, date, title, description, languages, htags, branchSelected, selected } = selectedData

  // console.log(object);
  // useEffect(() => {
    async function load() {
      const re = /\!\[\w+\]\(|<img src\=\"/gm;

      const md = await fetch(`https://raw.githubusercontent.com/BecomeAllan/${title}/${branchSelected}/README.md`)
      // console.log(md.status)

      if (md.status === 200) {
        var mdText = await md.text()
      } else {
        var mdText = "Content not provided." 
      }

      const mat = mdText.match(re)

      if (mat) {
        for (var idx in mat) {

          mdText = mdText.replace(mat[idx], `${mat[idx]}https://raw.githubusercontent.com/BecomeAllan/${title}/${branchSelected}/`)
        }
      }

      return setReadme(mdText)
    }

  //   load()
  //   // console.log("MUDEI aq Md");
  // }, [selected])
    load()
  return (
    <div className={styles.project}>

      <h1><a href={Url}>{title}</a></h1>

      <div className={styles.card}>
        <div className={styles.topCard}>
          <h6 className={styles.laguage}>{languages?.join(", ")}</h6>
          <h6 className={styles.date}>{date}</h6>
        </div>

        <div className={styles.bodyCard}>
          <h2 className={styles.description}>{description}</h2>

          <div className={styles.topbottomcard}>
            <h5 className={styles.tag}>{htags?.join(" ")}</h5>
            <div>
              <a href={Url}>
                <img src={prefix + "/github.svg"} alt="github" />
              </a>
            </div>
          </div>

          <div className={styles.line} />
          <div className={styles.resume}>

            <ReactMarkdown className={styles.md}
              remarkPlugins={[gfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              components={{
                code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={agate}
                      language={match[1]}
                      PreTag="div"
                      wrapLongLines ={true}
                      {...props}
                    />
                  ) : (
                    <code className={styles.code} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
              children={readme}
               />
          </div>
        </div>
      </div>
    </div>

  )
}