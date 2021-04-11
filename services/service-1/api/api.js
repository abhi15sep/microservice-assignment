const http = require('http');
const parse = require('url-parse')
const express = require('express');
const routes = express.Router();

//
// GET /api/message
routes
.post('/api', function (req, res, next) {
  res.type('application/json');

  var data = { 
    message: null,
    rand: random(0, 1),
  }

  var service2endpoint = process.env.SERVICE_API2_ENDPOINT;
  console.log(service2endpoint)
  var url = parse(service2endpoint, true);
  console.log(url)

  let payload = JSON.stringify({
    "message": req.body.message,
  })

  var options = {
    host: url.hostname,
    port: url.port,
    path: url.pathname + 'reverse',
    method: 'POST' ,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  }

  console.log("Service 1 was called. Calling Service 2 => " + JSON.stringify(options));


  let reqPost = http.request(options, (response) => {
    console.log("status code: ", response.statusCode);
    var body = '';
    response.on('data', (chunks) => {
      body += chunks;
    });

    response.on('end', function() {
      var service2responce = JSON.parse(body);
      data.message = service2responce.message;

      console.log("Message received from service 2: " + JSON.stringify(data));
      res.status(200).send(data);
    });
  });

  reqPost.write(payload);
  reqPost.end();

  reqPost.on('error', (err) => {
    console.log("Message received from service 2. error=" + JSON.stringify(err));
    res.status(500).send({"error": "Something went wrong in service 2!"});;
  });

})

/**
 * Utility function to generate random number.
 * @param {*} low 
 * @param {*} high 
 * @returns 
 */
function random(low, high) {
  return Math.random() * (high - low) + low
}

module.exports = routes;
