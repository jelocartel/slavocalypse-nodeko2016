'use strict'

var http = require('http')
var ws = require('ws')
var Game = require('./game.js')

var PACKAGE = require('./package.json')
var SERVER = PACKAGE.name + '/' + PACKAGE.version

var games = {}

var server = http.createServer((req, res) => {
  res.setHeader('server', SERVER)
  res.end()
})

var wsServer = new ws.Server({ server: server })

wsServer.on('connection', s => {
  s.on('message', msg => {
    var parsed = JSON.parse(msg)
    var room = parsed.topic
    var event = parsed.event

    var game

    // Whatever you say goes, boss.
    if (games[room]) game = games[room]
    else game = games[room] = new Game()

    if (event === 'start') {
      game.init()

    }
  })
})

server.listen(process.env.PORT || 5000)
