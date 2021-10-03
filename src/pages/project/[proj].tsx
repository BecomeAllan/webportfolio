import api from "axios"
import { baseUrl, prefix } from '../../../services/apis'
import { useRouter } from 'next/router'

const { createFilter } = require('javascript-search-input')


import { Card } from '../../components/Card'
import { useState, useEffect } from 'react'
import Head from 'next/head'

import styles from './project.module.scss'
import { MdCard } from '../../components/MdCard'
import { GetStaticPaths, GetStaticProps } from "next"
// import marked from "marked";



type filter = {
  keys: string[],
  data: repoDataProps[]
}

type ProjectProps = {
  pagedata: repoDataProps
  reposList: repoDataProps[]
}
export type repoDataProps = {
  id: number,
  languages: string[],
  updated_at: string,
  name: string,
  description: string,
  default_branch: string,
  html_url: string,
  tags?: string[],
  show: boolean
}

export default function Project({ reposList, pagedata}: ProjectProps ) {

  const router = useRouter()
  // console.log(pagedata);

  // const element = array[index];
  // if (router.isFallback) {
  //   // console.log("AQUIIIII");
  //   return <div>Loading...</div>;
  // } 


  const [selected, setSelected] = useState(pagedata.id)
  // const [languages, setLanguages] = useState(pagedata.languages)
  // const [date, setDate] = useState(pagedata.updated_at)
  // const [title, setTitle] = useState(pagedata.name)
  // const [description, setDescription] = useState(pagedata.description)
  // const [Url, setUrl] = useState(pagedata.html_url)
  // const [branchSelected, setBranchSelected] = useState(pagedata.default_branch)
  // const [htags, setHTags] = useState(pagedata.tags)



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

    // console.log("foi");
    setSelected(id)
    // setLanguages(languages)
    // setDate(updated_at)
    // setTitle(name)
    // setDescription(description)
    // setUrl(html_url)
    // setBranchSelected(default_branch)
    // setHTags(tags || [""])
  }

  const dataMdcard = {
    selected,
    languages: pagedata.languages,
    date:pagedata.updated_at,
    title: pagedata.name,
    description: pagedata.description,
    Url: pagedata.html_url,
    htags: pagedata.tags,
    branchSelected: pagedata.default_branch
  }

  // const dataMdcard = {
  //   selected,
  //   languages,
  //   date,
  //   title,
  //   description,
  //   Url,
  //   htags,
  //   branchSelected
  // }


  var named = router.query.proj
  // console.log(named);

  // reposList.map(repo => {
  //   if (repo.name === named) {
  //     funSelected(repo)
  //   }
  // })

  return (

    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />
        <title>
          BecomeAllan | {named}
        </title>

      </Head>

      <div className={styles.mardkdown}>

        <MdCard selectedData={dataMdcard} />
      </div>
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
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  // const data = await fetch("baseUrl + /README.md").then(res => res.text())
  // const data = await res.text()
  // const { proj } = ctx.params

  // const { data } = await api.get(`/episodes/${proj}`)


  var pagedata: repoDataProps = {
    default_branch: "main",
    id: 0,
    languages: [],
    description: "Description...",
    name: "Title",
    updated_at: "00/00/00",
    html_url: "/",
    show: true,
    tags: ["#Tags"]
  }

  // console.log(pagedata);

  const repos = await api.get(baseUrl + '/server/repos.json')

  const reposList: repoDataProps[] = repos.data

  for (const repo of reposList) {
    if (repo.name === params.proj) {
      pagedata = repo
    }
  }
  // console.log(data)
  // var reposList = params
  // var reposList = params.data

  // console.log(pagedata);

  return {
    props: {
      reposList,
      pagedata
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const repos = await api.get(baseUrl + '/server/repos.json')

  const reposList = repos.data

  const paths = reposList.map((repo: any) => {
    return {
      params: {
        proj: repo.name
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}