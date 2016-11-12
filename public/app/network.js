/* global WebSocket */

define(['knockout'], function(ko) {
  var url = 'ws://127.0.0.1:5000';

  var games = ko.observableArray([]);
  var playerID = ko.observable();
  var enemyPlayers = ko.observableArray([]);

  var socket = new WebSocket(url);
  var gameStarted = ko.observable(false);
  var gameName = ko.observable();

  var STATES = {
    LOBBY: '1',
    GAME: '2'
  };

  var GAMESTATE = ko.observable(STATES.LOBBY);
  var getRooms = function() {
    socket.send(JSON.stringify({
      event: 'discover'
    }));
  };

  var createGame = function() {
    var name = prompt('Game name:');
    gameName(name);
    socket.send(JSON.stringify({
      event: 'join',
      game: name
    }));
  };

  var startGame = function() {
    console.log('START GRY ', gameName());
    socket.send(JSON.stringify({
      event: 'start',
      game: gameName()
    }));
  };

  var joinGame = function(game) {
    console.log('tryin to join: ', game);
    gameName(game.name);
    socket.send(JSON.stringify({
      event: 'join',
      game: game.name
    }));
  };

  setTimeout(getRooms, 1000);

  ko.computed(function() {
    socket.onmessage = function(event) {
      console.log('new message: ', event.data);
      var parsedEvent = JSON.parse(event.data);
      switch (parsedEvent.event) {
        case 'discover':
          console.log(parsedEvent.games);
          games(parsedEvent.games);
          gameStarted(!!parsedEvent.started);
          break;
        case 'join':
          GAMESTATE(STATES.GAME);
          enemyPlayers(parsedEvent.players.filter(function(id) {
            return id !== playerID();
          }));
          break;
        case 'set-id':
          playerID(parsedEvent.id);
          break;
        case 'start':
          if (parsedEvent.game === gameName()) {
            gameStarted(true);
          }
          break;
        default:
          console.log('Unknown event: ' + event.data);
          break;
      }
    };
  });

  return {
    games: games,
    createGame: createGame,
    joinGame: joinGame,
    gameStarted: gameStarted,
    enemies: enemyPlayers,
    startGame: startGame,
    GAMESTATE: GAMESTATE,
    STATES: STATES
  };
});
