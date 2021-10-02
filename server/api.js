const fs = require('fs');
const fetch = require('node-fetch');
const { reposUrl } = require('../services/apis')
const { format, parseISO } = require('date-fns')
const ptBR = require('date-fns/locale/pt-BR')


async function GetRepos() {
  const repos = await fetch(reposUrl)
  const reposList = await repos.json()

  
  const repo = Promise.all(
    reposList.map(async (repo) => {

      const rep = {
        id: Number(repo.id),
        languages: await fetch(repo.languages_url).then(res => { return res.json() }).then(res=>Object.keys(res)),
        updated_at: format(parseISO(repo.updated_at), 'dd/MM/yy', { locale: ptBR }),
        name: repo.name,
        description: repo.description,
        default_branch: repo.default_branch,
        html_url: repo.html_url,
        show: true
      }
      return rep
    })
  ).then(repos => {
    console.log(repos)
    fs.writeFile('./server/repos.json', JSON.stringify(repos), 'utf8', err => {
      if (err) {
        console.error(err)
      }
      console.log("Deu bom")
      return repos
    })
  })

  repo.map(()=>{})

}

GetRepos()






