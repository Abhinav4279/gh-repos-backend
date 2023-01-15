const express = require('express');
const axios = require("axios");

const baseUrl = 'https://api.github.com/users/';

const app = express();

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

app.listen(5000, () => {
  console.log(`Listening on port 5000!`);
})