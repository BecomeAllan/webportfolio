import styles from './project.module.scss'
import { Card } from '../../components/Card'
import { useState } from 'react'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import gfm from 'remark-gfm'

// import marked from "marked";

type ProjectProps = {
  data: string
}

export default function Project({ data }: ProjectProps) {
  const [selected, setSelected] = useState(0)

  function funSelected(value: number) {
    setSelected(value)
  }

  // function markdownParseImage(data:string) {
  //   const regex = /.!\[.+\]\([^+]\)./ 
  //   return (data.match(regex))
  // }


  // console.log(markdownParseImage(data))
  
  return (

    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />
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
            <div className={styles.resume}>

              <ReactMarkdown
                remarkPlugins={[gfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                children={data} />
            </div>
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

// // SSR (Dados jão vao ser carregados juntos com a pagina)[ carregar toda vez que alguem acessar]
export async function getServerSideProps() {
  const res = await fetch("https://raw.githubusercontent.com/BecomeAllan/RNN/main/README.md")
  const data = await res.text()

  return {
    props: {
      data
    }
  }
}