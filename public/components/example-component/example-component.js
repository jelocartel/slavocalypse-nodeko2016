define(['knockout', 'text!./example-component.html'], function(ko, template) {
  'use strict';

  function ExampleComponent(params) {
    params = params;

    var hello = function() {
      alert('hello!!!');
    };

    return {
      hello: hello
    };
  }

  return { viewModel: ExampleComponent, template: template };

});
