define(['knockout', 'text!./card.html'], function(ko, template) {
  'use strict';

  function Card(params) {
    params = params;

    var hello = function() {
      alert('hello!!!');
    };

    return {
      hello: hello
    };
  }

  return { viewModel: Card, template: template };

});
