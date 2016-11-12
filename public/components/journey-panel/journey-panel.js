define(['knockout', 'text!./journey-panel.html'], function(ko, template) {
  'use strict';

  function JourneyPanel(params) {
    params = params;

    var hello = function() {
      alert('hello!!!');
    };

    return {
      hello: hello
    };
  }

  return { viewModel: JourneyPanel, template: template };

});
