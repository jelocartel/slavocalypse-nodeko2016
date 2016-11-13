/* global WebSocket */

define(['knockout'], function(ko) {
  var url = 'ws://127.0.0.1:5000';

  var games = ko.observableArray([]);
  var playerID = ko.observable();
  var enemyPlayers = ko.observableArray([]);
  var activeDeck = ko.observableArray([]);
  var campCard = ko.observable({});
  var playerDecks = ko.observableArray([]);
  var playerID = ko.observable();
  var enemyPlayers = ko.observableArray([]);
  var activePlayer = ko.observable();
  var player = ko.observable({});
  var cardsLeft = ko.observable();
  var score = ko.observableArray([]);

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
    if (name) {
      gameName(name);
      socket.send(JSON.stringify({
        event: 'join',
        game: name
      }));
    }
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

  var endTurn = function(actionId) {
    $('#camp-actions-container').removeClass('visible');
    socket.send(JSON.stringify({
      event: 'endTurn',
      campCardActionId: actionId,
      game: gameName()
    }));
  };

  socket.onmessage = function(event) {
    var parsedEvent = JSON.parse(event.data);
    console.log('new message: ', parsedEvent);
    switch (parsedEvent.event) {
      case 'discover':
        games(parsedEvent.games);
        break;
      case 'join':
        GAMESTATE(STATES.GAME);
        enemyPlayers(parsedEvent.players.filter(function(id) {
          return id !== playerID();
        }));
        gameStarted(parsedEvent.started);
        break;
      case 'start':
        if (parsedEvent.game === gameName()) {
          localStorage.setItem('gameName', parsedEvent.game);
          gameStarted(true);
        }
        break;
      case 'set-id':
        var savedPlayerId = localStorage.getItem('playerId');
        if (savedPlayerId && playerID() !== savedPlayerId) {
          console.log('FOUND PLAYER ID!', savedPlayerId);
          playerID(savedPlayerId);
          socket.send(JSON.stringify({
            event: 'set-id',
            id: savedPlayerId
          }));
        } else if (parsedEvent.id) {
          localStorage.setItem('playerId', parsedEvent.id);
          playerID(parsedEvent.id);
        } else {
          console.log('ROGER THAT SIR, I DO HAVE A KEY!');
          var gameId = localStorage.getItem('gameName');
          if (gameId) {
            console.log('AND I DO HAVE GAME NAME SIR!');
            joinGame({name: gameId});
          }

        }
        break;
      case 'state':
        console.log('pszyszet state, ja mam ID: ', playerID());
        // console.log('elo state');
        // console.log('active deck', parsedEvent.activeDeck);
        // console.log('camp card', parsedEvent.campCard);
        activeDeck(parsedEvent.activeDeck);
        campCard(parsedEvent.campCard);
        playerDecks(parsedEvent.players[playerID()].deck);
        activePlayer(parsedEvent.activePlayer);
        player(parsedEvent.players[playerID()]);
        cardsLeft(parsedEvent.deckCardsLeft);
        console.log('STATE PLAYER', player());
        break;
      case 'finish':
        $('#score-container').addClass('visible');
        score(parsedEvent.victory);
        break;  
      default:
        console.log('Unknown event: ' + event.data);
        break;
    }
  };

  return {
    games: games,
    createGame: createGame,
    joinGame: joinGame,
    gameStarted: gameStarted,
    enemies: enemyPlayers,
    startGame: startGame,
    GAMESTATE: GAMESTATE,
    STATES: STATES,
    activeDeck: activeDeck,
    campCard: campCard,
    playerDecks: playerDecks,
    game: gameName,
    endTurn: endTurn,
    socket: socket,
    playerID: playerID,
    activePlayer: activePlayer,
    player: player,
    cardsLeft: cardsLeft,
    score: score
  };
});
