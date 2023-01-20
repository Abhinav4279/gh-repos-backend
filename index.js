const express = require('express');
const axios = require("axios");
const cors = require('cors');
require('dotenv').config();

const baseUrl = process.env.BASE_URL;

const app = express();
app.use(cors());

//todo: add / endpoint
app.get('/', async(req, res) => {
  const response = {"/user": {"params": "username"},
                    "/repos": {"params": "username"}};

  return res.status(200).json(response);
})

app.get('/user', async(req, res) => {
  const url = baseUrl + req.query.username;
  try {
    const response = await axios({
      url: url,
      method: 'get',
    })

    //name, avatar_url, location, bio, twitter, blog
    const {name, avatar_url, location, bio, twitter_username, blog, html_url} = response.data;
    res.status(200).json({name, avatar_url, location, bio, twitter_username, blog, html_url});
  } catch(err) {
    res.status(404).json({message: err});
  }
})

app.get('/repos', async(req, res) => {
  const url = baseUrl + req.query.username + "/repos";

  try {
    const response = await axios({
      url: url,
      method: 'get',
    })
    
    // name, description, language, html_url 
    const arr = response.data;
    const ret = arr.map((repo) => {
      const {name, description, language, html_url} = repo;
      return {name, description, language, html_url};
    })

    res.status(200).json(ret);
  } catch(err) {
    res.status(404).json({message: err});
  }
})

module.exports = app.listen(5000, () => {
  console.log(`Listening on port 5000!`);
})