import api from "axios"
import { baseUrl, repoUrl, reposUrl, prefix } from '../../../services/apis'
const { createFilter } = require('javascript-search-input')

import Head from 'next/head'
import { useState } from 'react'
import { Card } from '../../components/Card'
import styles from './about.module.scss'
import { GetStaticProps } from "next"

type About = {
  place: string,
  date: string,
  description: string,
  ref: string
}

type aboutDataProps = {
  experiences?: About[],
  curses?: About[]
}

type aboutProps = {
  aboutData: aboutDataProps,
  weebbookData: string[]
}

type filter = {
  keys: string[],
  data: string[]
}

export default function About({ aboutData, weebbookData }: aboutProps) {

  const [selected, setSelected] = useState(0)

  const { curses, experiences } = aboutData

  function useFilter({ keys, data }: filter) {
    const [inputText, setInputText] = useState('');
    const myFilter = createFilter(keys);
    const filtered = data.filter(myFilter(inputText));

    return { inputText, setInputText, filtered };
  };

  const { inputText, setInputText, filtered } = useFilter({
    keys: [""],
    data: weebbookData,
  });

  function funSelected(value: number) {
    setSelected(value)
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>
          BecomeAllan | About
        </title>
      </Head>

      <div className={styles.about}>
        
        <div className={styles.experienceCard}>
          <h1>EXPERIENCE</h1>
          <div className={styles.line} />

          <div className={styles.CardCountainer}>

            {experiences?.map((exp: About, indx) => {
              return (
                <div
                  className={styles.experience}
                  key={indx}>
                  <a href={exp.ref}>

                    <div className={styles.topInfo}>
                      <h2>{exp.place}</h2>
                      <h3>{exp.date}</h3>
                    </div>
                    <p>{exp.description}</p>
                  </a>

                  <div className={styles.line} />
                </div>
              )
            })}

          </div>
        </div>

        <div className={styles.curseCard}>
          <h1>COURSE</h1>
          <div className={styles.line} />

          <div className={styles.CardCountainer}>

            {curses?.map((curse: About, indx) => {
              return (
                <div
                  className={styles.curse}
                  key={indx}>
                  <a href={curse.ref}>

                    <div className={styles.topInfo}>
                      <h2>{curse.place}</h2>
                      <h3>{curse.date}</h3>
                    </div>
                    <p>{curse.description}</p>
                  </a>

                  <div className={styles.line} />
                </div>
              )
            })}

          </div>
        </div>
        <div className={styles.contactCard}>
          <h1>CONTACT</h1>
          <div className={styles.line} />
          <div className={styles.contact}>

            <div className={styles.contactContainer}>
              <h2>Email</h2>
              <div className={styles.line} />
              <p>becomeallan@gmail.com</p>
            </div>

            <div className={styles.contactContainer}>
              <h2>Address</h2>
              <div className={styles.line} />
              <p>BRAZIL, Brasília - DF</p>
            </div>


            <div className={styles.contactContainer}>
              <h2>Phone</h2>
              <div className={styles.line} />
              <p>+555(61) 98490-3246</p>
            </div>

          </div>
        </div>

      </div>

      <div className={styles.Vline}></div>

      <div className={styles.webbook}>
        <h1>WEBBOOKs</h1>
        <p>Some summaries on mathematics, probability theory, statistics and others in web book format</p>

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
          <p>coming soon...</p>

          {/* <Card value={0} selected={selected} onChange={funSelected} /> */}

        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const data = await fetch("baseUrl + /README.md").then(res => res.text())
  // const data = await res.text()
  const about = await api.get(baseUrl + '/server/about.json')
  // const about = await api.get("http://localhost:3000/about")
  const aboutData = about.data.about
  // const aboutData = about.data
  // console.log(about.data);

  const weebbookData = [{}]

  // console.log(aboutData);

  // reposList

  return {
    props: {
      aboutData,
      weebbookData
      // reposList
    }
  }
}
