'use strict'

const http = require('http')
const ws = require('ws')

const PACKAGE = require('./package.json')
const SERVER = PACKAGE.name + '/' + PACKAGE.version

const server = http.createServer((req, res) => {
  res.setHeader('server', SERVER)
  res.end()
})

server.listen(process.env.PORT || 5000)
