define(['knockout', 'text!./lobby-page.html'], function(ko, template) {
  'use strict';

  function LobbyPage(params) {
    params = params;

    var startGame = function() {
      window.location.hash = "#!/game";
    };

    return {
      startGame: startGame
    };
  }

  return { viewModel: LobbyPage, template: template };

});
