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

  ko.applyBindings({
    isMobile: isMobile,
    router: router,
    network: network,
    games: games,
    joinGame: network.join
  });
});
