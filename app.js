const express = require('express')
require('dotenv').config()

const app = express();

// const port = 3000

const github = {
    "login": "mr-arsul-jawed",
    "id": 128362584,
    "node_id": "U_kgDOB6aoWA",
    "avatar_url": "https://avatars.githubusercontent.com/u/128362584?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mr-arsul-jawed",
    "html_url": "https://github.com/mr-arsul-jawed",
    "followers_url": "https://api.github.com/users/mr-arsul-jawed/followers",
    "following_url": "https://api.github.com/users/mr-arsul-jawed/following{/other_user}",
    "gists_url": "https://api.github.com/users/mr-arsul-jawed/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mr-arsul-jawed/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mr-arsul-jawed/subscriptions",
    "organizations_url": "https://api.github.com/users/mr-arsul-jawed/orgs",
    "repos_url": "https://api.github.com/users/mr-arsul-jawed/repos",
    "events_url": "https://api.github.com/users/mr-arsul-jawed/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mr-arsul-jawed/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "arsul jawed",
    "company": null,
    "blog": "www.linkedin.com/in/arsul-jawed-716b22266",
    "location": "Kolkata",
    "email": null,
    "hireable": null,
    "bio": "3rd Year Bachelor of Computer application Student",
    "twitter_username": null,
    "public_repos": 13,
    "public_gists": 0,
    "followers": 2,
    "following": 3,
    "created_at": "2023-03-20T08:42:03Z",
    "updated_at": "2024-11-20T12:09:03Z"
  }

app.get("/",(req, res)=>{
     res.send("Hello World!")
})



app.get("/arsul",(req, res)=>{
    res.send("Please ")
})

app.get("/github",(req, res)=>{
   res.json(github )
})

app.listen(process.env.PORT,()=>{
   console.log((`App listening on port: ${process.env.PORT}`));
   

})