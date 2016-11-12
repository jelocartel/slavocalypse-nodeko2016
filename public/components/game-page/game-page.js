define(['knockout', 'text!./game-page.html'], function(ko, template) {
  'use strict';

  function GamePage(params) {
    params = params;

    var hello = function() {
      alert('hello!!!');
    };

    return {
      hello: hello
    };
  }

  return { viewModel: GamePage, template: template };

});
