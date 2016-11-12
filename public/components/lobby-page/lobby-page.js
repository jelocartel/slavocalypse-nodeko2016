define(['knockout', 'text!./lobby-page.html'], function(ko, template) {
  'use strict';

  function LobbyPage(params) {
    params = params;

    var hello = function() {
      alert('hello!!!');
    };

    return {
      hello: hello
    };
  }

  return { viewModel: LobbyPage, template: template };

});
