import axios from "axios"
import config from "../../config"

exports.handler = function(event, context, callback) {
  const apiRoot = "https://api.unsplash.com"
  const accessKey = process.env.ACCESS_KEY || config.accessKey

  const dogEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${10}&collections='3816141,1154337,1254279'`

  axios.get(dogEndpoint).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        images: res.data,
      }),
    })
  })
}