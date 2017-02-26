'use strict'
let express = require('express')
  , app = express()
  
app.get('/', function (req, res) {
  console.log( req.headers )
  let ipaddress = req.headers['x-forwarded-for']
    , language = req.headers['accept-language'].split(',')[0]
    , software = req.headers['user-agent'].split(/[()]+/)[1]
  console.log(ipaddress, language)
  res.send({
    ipaddress: ipaddress
    , language: language
    , software: software
  })
})

app.set('port', process.env.PORT || 3000)

app.listen( app.get( 'port' ), function() {
  console.log ('app listening on port: ' + app.get ( 'port' ))
})