'use strict'

const http = require('http')
const ws = require('ws')
const game = require('./game.js')
const Game = game.Game
const User = game.User

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

var id = 0

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
      roomcast({
        event: 'start',
        activeDeck: game.activeDeck.map(serializeCard),
        camp: game.kartaKurwaWioski
      })
    }
    else if (event === 'join') {
      const user = new User({ id: id++ })
      game.addUser(user)
    }
    else if (event === 'discover') {
      s.send({ event: 'discover', rooms: Object.keys(rooms) })
    }
  })
})

server.listen(process.env.PORT || 5000)
