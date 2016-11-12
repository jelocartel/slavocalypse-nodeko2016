'use strict'

const http = require('http')
const ws = require('ws')
const Game = require('./game.js').Game
const User = require('./user.js').User
const randomstring = require('randomstring')

const PACKAGE = require('./package.json')
const SERVER = PACKAGE.name + '/' + PACKAGE.version

var games = {}
var sockets = {}
var socketList = []

function gamecast(game, msg) {
  msg.game = game
  sockets[game].forEach(s => s.send(JSON.stringify(msg)))
}

function broadcast(msg) {
  socketList.forEach(s => s.send(JSON.stringify(msg)))
}

function sendState(room) {
  var playerDecks = {}

  games[room].players.forEach(p => {
    if (!playerDecks[p.id]) playerDecks[p.id] = {}
    Object.keys(p.deck).forEach(d => {
      playerDecks[p.id][d] = p.deck[d].map(serializeCard)
    })
  })

  gamecast(room, {
    event: 'state',
    activeDeck: games[room].activeDeck.map(serializeCard),
    campCard: games[room].campCard,
    playerDecks: playerDecks
  })
}

function discovery() {
  return Object.keys(games).map((g) => {
    return {
      players: games[g].players.length,
      name: g,
      started: games[g].started
    }
  })
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
  socketList.push(s)

  function id() {
    if (s.id) return s.id
    else return setId(randomstring.generate(8))
  }

  function setId(id) {
    s.id = id
    s.send(JSON.stringify({
      event: 'set-id',
      id: id
    }))
  }

  id()

  s.on('close', () => {
    const index = socketList.indexOf(s)
    socketList.splice(index, 1)
  })

  s.on('message', msg => {
    const parsed = JSON.parse(msg)
    const room = parsed.game
    const event = parsed.event

    if (event === 'discover') {
      s.send(JSON.stringify({
        event: 'discover',
        games: discovery()
      }))
      return
    }
    else if (event === 'set-id') return setId(event.id)

    var game

    // Whatever you say goes, boss.
    if (games[room]) {
      game = games[room]
      sockets[room].push(s)
    }
    else {
      game = games[room] = new Game()
      game.hooks.onTurnFinish = () => sendState(room)
      game.hooks.onRoundFinish = () => sendState(room)
      game.hooks.onGameFinish = () => sendState(room)
      sockets[room] = [ s ]
      broadcast({ event: 'discover', games: discovery() })
    }

    if (event === 'start') {
      game.start()
      gamecast(room, {
        event: 'start'
      })
      sendState(room)
    }
    else if (event === 'join') {
      if (game.players.filter(p => p.user.id === s.id).length === 0) {
        const user = new User(s.id)
        game.addUser(user)
      }
      gamecast(room, { event: 'join', id: s.id })
    }
    else if (event === 'buy') {
      game.gameLoop({ type: 'buy', activeCardNumber: event.activeCardNumber })
      sendState(room)
    }
    else if (event === 'finish') {
      game.gameLoop({ type: 'finish', campCardActionId: parsed.campCardActionId })
      sendState(room)
    }
  })
})

server.listen(process.env.PORT || 5000)
