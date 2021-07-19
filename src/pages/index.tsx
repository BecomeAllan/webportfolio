import { api } from '../../services/api'
import { GetStaticProps } from 'next'

import { useState } from 'react'
import styles from './home.module.scss'

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
  console.log(infos);


  const [selected, setSelected] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <h3>HI, I’AM</h3>
        <h2>ALLAN</h2>
        <p>I'm a stats student who loves code and math, which provides innovative ideas about our world. </p>
        <h1>programming <br /> skills</h1>
      </div>

      <div className={styles.skill}>

        <div className={styles.cardConteiner}>

          {infos.map(info => {
            return (
              <div onClick={() => setSelected(info.index)} className={selected === info.index ? styles.cardSelect : styles.card}>
                <h2>{info.title}</h2>
                <p>{info.intro}</p>
                <img src={`${info.title}.svg`} alt={`${info.title}`} />
              </div>
            )
          })}

        </div>

        <div className={styles.introConteiner}>
          <h1>Python</h1>
          <h2>test</h2>
          <p>palavras efsadfdasfs adfdasf sdafdasf sadfdasfsd afsad fsadfdasf sdafdasfsa dfds
            palavras<br /><br />palavras efsadfd asfsadfd asfsdaf dasfsa dfdasfsdaf sad fsadfd asfsdafdasf sadfds
            palavras</p>
        </div>

      </div>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const { data } = await api.get('home.json')

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
    },
    revalidate: 10 // segundos
  }
}