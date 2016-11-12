/* jshint browser: true */

define([
  'knockout',
  './router',
  './network',
  './components'
], function(
  ko, router, network
) {
  'use strict';

  // Mockups
  // if (requirejs.s.contexts._.config.useMock) {
  //   window.mocks = true;
  // } else {
  //   window.apiurl = window.apiurl || requirejs.s.contexts._.config.apiURL;
  // }

  var games = network.games;
  var isMobile = $(window).width() <= 560 ? true : false;

  ko.computed(function() {
    switch (network.GAMESTATE()) {
      case network.STATES.LOBBY:
        break;
      case network.STATES.GAME:
        window.location.hash = "#!/game";
        break;
    }
  });
  ko.applyBindings({
    isMobile: isMobile,
    router: router,
    network: network,
    games: games,
    joinGame: network.join,
    createGame: network.createGame
  });
});
