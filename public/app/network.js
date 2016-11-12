/* global WebSocket */

define(['knockout'], function(ko) {
  var url = 'ws://127.0.0.1:5000';

  var games = ko.observableArray([]);

  var socket = new WebSocket(url);

  var getRooms = function() {
    socket.send(JSON.stringify({
      event: 'discover'
    }));
  };

  var join = function() {
    var name = prompt('Game name:');
    socket.send(JSON.stringify({
      event: 'join',
      game: name
    }));
  };

  // setTimeout(getRooms, 300);

  ko.computed(function() {
    socket.onmessage = function(event) {
      console.log('new message: ', event.data);
      switch (event.event) {
        case 'discover':
          games(event.games);
          break;
        case 'new-player':
          games
        default:
          console.log('Unknown event: ' + event.data);
          break;
      }
    };
  });

  return {
    games: games,
    join: join
  };
});
