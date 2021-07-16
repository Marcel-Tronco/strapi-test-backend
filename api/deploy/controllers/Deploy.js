const axios = require('axios')
require("dotenv").config({
  path: `.env`,
});

var error_occured

module.exports = {
  async index(ctx) {
    try {
      var response = await axios({
        method: 'post', 
        url: process.env.GITHUB_REBUILD_URL || "http://example.com", // insert env vars after setting
        headers: {
          'Authorization': `token ${process.env.PA_TOKEN}`// insert env vars after setting
        },
        data: {
          'ref': 'main'
        }
      })
      ctx.send("yey")
    } catch (error) {
      (error) => ctx.send("ney")
    }
  }
};