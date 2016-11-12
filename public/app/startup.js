/* jshint browser: true */

define([
  'knockout',
  './router',
  './components'
], function(
  ko, router
) {
  'use strict';

  // Mockups
  // if (requirejs.s.contexts._.config.useMock) {
  //   window.mocks = true;
  // } else {
  //   window.apiurl = window.apiurl || requirejs.s.contexts._.config.apiURL;
  // }

  var isMobile = $(window).width() <= 560 ? true : false;

  ko.applyBindings({
    isMobile: isMobile,
    router: router
  });
});
