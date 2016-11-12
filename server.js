'use strict'

const http = require('http')
const ws = require('ws')
const Game = require('./game.js')

const PACKAGE = require('./package.json')
const SERVER = PACKAGE.name + '/' + PACKAGE.version

var games = {}
var sockets = {}

function roomcast(room, msg) {
  sockets[room].forEach(s => s.send(JSON.stringify(msg)))
}

function serializeCard(card) {
  return card
}

const server = http.createServer((req, res) => {
  res.setHeader('server', SERVER)
  res.end()
})

const wsServer = new ws.Server({ server: server })

wsServer.on('connection', s => {
  s.on('message', msg => {
    const parsed = JSON.parse(msg)
    const room = parsed.topic
    const event = parsed.event

    var game

    // Whatever you say goes, boss.
    if (games[room]) {
      game = games[room]
      sockets[room].push(s)
    }
    else {
      game = games[room] = new Game()
      sockets[room] = [ s ]
    }

    if (event === 'start') {
      game.start()
      roomcast({ event: 'start', activeDeck: game.activeDeck.map(serializeCard) })
    }
  })
})

server.listen(process.env.PORT || 5000)
