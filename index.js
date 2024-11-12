require('dotenv').config()
const express = require('express')

const app = express()

const githubData = {
    "login": "ZorRro",
    "id": 9948372,
    "node_id": "MDQ6VXNlcjk5NDgzNzI=",
    "avatar_url": "https://avatars.githubusercontent.com/u/9948372?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ZorRro",
    "html_url": "https://github.com/ZorRro",
    "followers_url": "https://api.github.com/users/ZorRro/followers",
    "following_url": "https://api.github.com/users/ZorRro/following{/other_user}",
    "gists_url": "https://api.github.com/users/ZorRro/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ZorRro/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ZorRro/subscriptions",
    "organizations_url": "https://api.github.com/users/ZorRro/orgs",
    "repos_url": "https://api.github.com/users/ZorRro/repos",
    "events_url": "https://api.github.com/users/ZorRro/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ZorRro/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "ZorRro",
    "company": "Fize",
    "blog": "https://note-app-747.herokuapp.com/",
    "location": "Remote",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2014-11-25T14:29:41Z",
    "updated_at": "2024-08-12T13:06:43Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('luffydotcom')
})

app.get('/login',(req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

