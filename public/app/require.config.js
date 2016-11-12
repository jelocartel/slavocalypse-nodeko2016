// require.js looks for the following global when initializing
var require = {
  baseUrl: '.',
  paths: {
      "knockout": "bower_modules/knockout/dist/knockout",
      "text":     "bower_modules/requirejs-text/text"
  },

  useMock: false,//true,
  apiURL: function(){ return window.apiurl || 'http://localhost:8000'; }(),
  urlArgs: "bust=" + (new Date()).getTime(),
  // components
  // DO NOT REMOVE THE COMMENT ABOVE
};
