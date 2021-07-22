import api from "axios"
import { baseUrl, prefix } from '../../../services/apis'

const { createFilter } = require('javascript-search-input')


import { Card } from '../../components/Card'
import { useState, useEffect } from 'react'
import Head from 'next/head'

import styles from './project.module.scss'
import { MdCard } from '../../components/MdCard'
import { GetStaticProps } from "next"
// import marked from "marked";



type filter = {
  keys: string[],
  data: repoDataProps[]
}

type ProjectProps = {
  // data: string
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
  tags?: string[],
  show: boolean
}

export default function Project({ reposList }: ProjectProps) {
  const [selected, setSelected] = useState(0)
  const [languages, setLanguages] = useState(["languages"])
  const [date, setDate] = useState("00/00/00")
  const [title, setTitle] = useState("Title")
  const [description, setDescription] = useState("Description...")
  const [Url, setUrl] = useState("/")
  const [branchSelected, setBranchSelected] = useState("main")
  const [htags, setHTags] = useState(["#Tags"])

  // const [search, setSearch] = useState('')
  function useFilter({ keys, data }: filter) {
    const [inputText, setInputText] = useState('');
    const myFilter = createFilter(keys);
    const filtered = data.filter(myFilter(inputText));

    return { inputText, setInputText, filtered };
  };

  const { inputText, setInputText, filtered } = useFilter({
    keys: ['languages', "name", "tags"],
    data: reposList,
  });

  function funSelected({
    id,
    languages,
    updated_at,
    name,
    description,
    default_branch,
    html_url,
    tags
  }: repoDataProps) {

    setSelected(id)
    setLanguages(languages)
    setDate(updated_at)
    setTitle(name)
    setDescription(description)
    setUrl(html_url)
    setBranchSelected(default_branch)
    setHTags(tags || [""])
  }

  const dataMdcard = {
    selected,
    languages,
    date,
    title,
    description,
    Url,
    htags,
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

          <div className={styles.searchBox}>

            <img src={prefix + "/search.svg"} alt="search" />
            <input
              type="text"
              value={inputText}
              placeholder="Titles, #Tags, Code Languages"
              onChange={event => setInputText(event.target.value)}
            />
          </div>

          <div className={styles.lineSearch} />
        </div>

        <div className={styles.projectcard}>
          {filtered.map(repoData => {
            return <Card
              key={repoData.id}
              value={repoData.id}
              selected={selected}
              onChange={funSelected}
              data={repoData}
              show={repoData.show}
            />
          })}


        </div>

      </div>
    </div>
  )

}

// // SSR (Dados jão vao ser carregados juntos com a pagina)[ carregar toda vez que alguem acessar]
export const getStaticProps: GetStaticProps = async () => {
  // const data = await fetch("baseUrl + /README.md").then(res => res.text())
  // const data = await res.text()
  const repos = await api.get(baseUrl + '/server/repos.json')

  const reposList = repos.data

  // console.log(reposList);

  // reposList

  return {
    props: {
      // data,
      reposList
    }
  }
}