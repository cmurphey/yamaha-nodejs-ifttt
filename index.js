const express = require('express')
const YamahaAPI = require("yamaha-nodejs");

const app = express()
const port = 3000
const yamaha = new YamahaAPI();

app.get('/volumeup', (request, response) => {
  yamaha.volumeUp(20)
  response.send('Volume up')
})

app.get('/volumedown', (request, response) => {
  yamaha.volumeDown(20)
  response.send('Volume down')
})

app.get('/poweron', (request, response) => {
  yamaha.powerOn()
  response.send('Power on')
})

app.get('/poweroff', (request, response) => {
  yamaha.powerOff()
  response.send('Power off')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})