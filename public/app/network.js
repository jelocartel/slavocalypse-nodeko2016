/* global WebSocket */

define(['knockout'], function(ko) {
  var url = 'ws://127.0.0.1:5000';

  var games = ko.observableArray([]);

  var socket = new WebSocket(url);

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
    socket.send(JSON.stringify({
      event: 'join',
      game: name
    }));
  };

  var joinGame = function(game) {
    console.log('tryin to join: ', game);
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
          break;
        case 'join':
          GAMESTATE(STATES.GAME);
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
    GAMESTATE: GAMESTATE,
    STATES: STATES
  };
});
