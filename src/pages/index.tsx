import api from "axios"
import {baseUrl, prefix} from '../../services/apis.js'

import { GetStaticProps } from 'next'

import { useState } from 'react'
import styles from './home.module.scss'
import Head from 'next/head'

type Infos = {
  index: number
  title: string
  intro: string
  description: string
  text: string
}

type HomeProps = {
  infos: Infos[]
}

export default function Home({ infos }: HomeProps) {
  // console.log(infos);


  const [selected, setSelected] = useState(1)

  return (
    <div className={styles.container}>
      <Head>
        <title>
          BecomeAllan | Home
        </title>
      </Head>
      <div className={styles.home}>
        <h3>HI, I’AM</h3>
        <h2>ALLAN</h2>
        <p>I'm a stats student who loves code and math, which provides innovative ideas about our world. </p>
        <h1>programming <br /> skills</h1>
      </div>

      <div className={styles.skill}>

        <div className={styles.cardConteiner}>

          {infos.map((info, key) => {
            return (
              <div
                key={info.title}
                onClick={() => setSelected(key)}
                className={selected === key ? styles.cardSelect : styles.card}>
                <h2>{info.title}</h2>
                <p>{info.intro}</p>
                <img src={prefix + `/${info.title}.svg`} alt={`${info.title}`} />
              </div>
            )
          })}

        </div>

        <div className={styles.introConteiner}>
          <h1>{infos[selected].title}</h1>
          <h2>{infos[selected].description}</h2>
          {infos[selected].text.split('\n').map((text, key) => {
            return (
              <span key={key * 3}>
                {text}
                < br />
                < br />
              </span> 
            )
          })}


        </div>

      </div>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const { data } = await api.get(baseUrl + '/server/home.json')
  // const { data } = await api.get('info')

  const datainfo = data.info

  const infos = datainfo.map((info: Infos) => {
    return {
      index: info.index,
      title: info.title,
      intro: info.intro,
      description: info.description,
      text: info.text
    }
  })

  return {
    props: { // passada em HOME(props)
      infos
    }
  }
}