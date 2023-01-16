const express = require('express');
const axios = require("axios");
const cors = require('cors');
require('dotenv').config();

const baseUrl = process.env.BASE_URL;

const app = express();
app.use(cors());


app.get('/user', async(req, res) => {
  const url = baseUrl + req.query.username;
  try {
    const response = await axios({
      url: url,
      method: 'get',
    })

    //name, avatar_url, location, bio, twitter, blog
    const {name, avatar_url, location, bio, twitter, blog} = response.data;
    res.status(200).json({name, avatar_url, location, bio, twitter, blog});
  } catch(err) {
    res.status(500).json({message: err});
  }
})

app.get('/repos', async(req, res) => {
  const url = baseUrl + req.query.username + "/repos";

  try {
    const response = await axios({
      url: url,
      method: 'get',
    })
    
    //name, description, language
    const arr = response.data;
    const ret = arr.map((repo) => {
      const {name, description, language} = repo;
      return {name, description, language};
    })

    console.log(ret);
    res.status(200).json(ret);
  } catch(err) {
    res.status(500).json({message: err});
  }
})

app.listen(5000, () => {
  console.log(`Listening on port 5000!`);
})