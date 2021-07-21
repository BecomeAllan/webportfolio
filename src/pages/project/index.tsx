import api from "axios"
import { baseUrl, repoUrl, reposUrl } from '../../../services/apis'

// import reposList from "../../../server/repos.json"

import { Card } from '../../components/Card'
import {  useState } from 'react'
import Head from 'next/head'

import styles from './project.module.scss'
import { MdCard } from '../../components/MdCard'
// import marked from "marked";

type ProjectProps = {
  data: string
  reposList: repoDataProps[]
}
export type repoDataProps = {
  id: number,
  languages: [],
  updated_at: string,
  name: string,
  description: string,
  default_branch: string,
  html_url: string,
}

export default function Project({ data, reposList }: ProjectProps) {
  const [selected, setSelected] = useState(0)
  const [languages, setLanguages] = useState([])
  const [date, setDate] = useState("00/00/00")
  const [title, setTitle] = useState("Title")
  const [description, setDescription] = useState("Description...")
  const [Url, setUrl] = useState("URL")
  const [branchSelected, setBranchSelected] = useState("main")

  const [tags, setTags] = useState("Tags")

  function funSelected({
    id,
    languages,
    updated_at,
    name,
    description,
    default_branch,
    html_url
  }: repoDataProps) {

    setSelected(id)
    setLanguages(languages)
    setDate(updated_at)
    setTitle(name)
    setDescription(description)
    setUrl(html_url)
    setBranchSelected(default_branch)
    setTags("#tag")
  }

  const dataMdcard = {
    selected,
    languages,
    date,
    title,
    description,
    Url,
    tags,
    branchSelected
  }

  return (

    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />
        <title>
          BecomeAllan | Project
        </title>
      </Head>

      <MdCard selectedData={dataMdcard} />
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
          {reposList.map(repoData => {
            return <Card key={repoData.id} value={repoData.id} selected={selected} onChange={funSelected} data={repoData} />
          })}


        </div>

      </div>
    </div>
  )

}

// // SSR (Dados jão vao ser carregados juntos com a pagina)[ carregar toda vez que alguem acessar]
export async function getServerSideProps() {
  // const data = await fetch("baseUrl + /README.md").then(res => res.text())
  // const data = await res.text()
  const  reposList = await api.get(baseUrl + '/server/repos.json')
  
  // const reposList = await repos.json()

  console.log(reposList);

  // reposList

  return {
    props: {
      // data,
      reposList
    }
  }
}