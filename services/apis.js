// import axios from "axios"

const baseUrl = "https://raw.githubusercontent.com/BecomeAllan/webportfolio/main"

const reposUrl = "https://api.github.com/users/BecomeAllan/repos"
const repoUrl = "https://api.github.com/repos/BecomeAllan" // + "/nameRepo'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

// export const api = axios.create({
// baseURL: baseUrl +'server/'
// })

// export const api = axios.create({
//   baseURL: 'http://localhost:3000/'
// })

module.exports = {baseUrl, reposUrl, repoUrl, prefix }