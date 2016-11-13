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

function openSockets(s) {
  return s.readyState === ws.OPEN
}

function gamecast(game, msg) {
  msg.game = game
  sockets[game].filter(openSockets).forEach(s => s.send(JSON.stringify(msg)))
}

function broadcast(msg) {
  socketList.filter(openSockets).forEach(s => s.send(JSON.stringify(msg)))
}

function sendState(room) {
  var players = {}

  games[room].players.forEach(player => {
    players[player.id] = serializePlayer(player)
  })

  var state = {
    event: 'state',
    activeDeck: games[room].activeDeck.map(serializeCard),
    campCard: games[room].campCard,
    players: players
  }

  const activePlayer = games[room].activePlayer

  if (games[room].players[activePlayer])
    state.activePlayer = games[room].players[activePlayer].id

  gamecast(room, state)
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

function serializePlayer(player) {
  var ret = {
    health: player.health,
    coins: player.coins,
    deck: {}
  }

  Object.keys(player.deck).forEach(key => {
    ret.deck[key] = player.deck[key].map(serializeCard)
  })

  return ret
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

  s.once('close', () => {
    const listIndex = socketList.indexOf(s)
    socketList.splice(listIndex, 1)
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
      game.on('turnFinish', () => sendState(room))
      game.on('roundFinish', () => sendState(room))
      game.once('gameFinish', () => sendState(room))
      sockets[room] = [ s ]
      broadcast({ event: 'discover', games: discovery() })
    }

    if (event === 'start') {
      game.start()
      gamecast(room, {
        event: 'start'
      })
      sendState(room)
      broadcast({ event: 'discover', games: discovery() })
    }
    else if (event === 'join') {
      if (game.players.filter(p => p.id === s.id).length === 0) {
        const user = new User(s.id)
        game.addUser(user)
      }
      gamecast(room, { event: 'join', id: s.id, players: game.players.map(p => p.id) })
      broadcast({ event: 'discover', games: discovery() })
    }
    else if (event === 'buy') {
      game.gameLoop({ type: 'buy', activeCardNumber: event.activeCardNumber })
      sendState(room)
    }
    else if (event === 'endTurn') {
      game.gameLoop({ type: 'endTurn', campCardActionId: parsed.campCardActionId })
      sendState(room)
    }
  })
})

server.listen(process.env.PORT || 5000)
