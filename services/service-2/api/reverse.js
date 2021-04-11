const express = require('express');
const routes = express.Router();

// POST /reverse
routes
.post('/reverse', function (req, res, next) {
  res.type('application/json');

  console.log("Service 2 was called.");

  var data = { 
    message: reverseString(req.body.message)
  }  

  res.status(200).send(data)
})

function reverseString(str) {
  return str.split( '' ).reverse( ).join( '' );
}

module.exports = routes;
