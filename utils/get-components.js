var path = require('path');
var fs = require('fs');
var componentsPath = 'public/components';

var getComponents = function() {
  'use strict';

  var results = {
    components:[],
    lesses: []
  };

  var startPath = componentsPath;
  if (!fs.existsSync(startPath)) {
      return;
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      if (fs.existsSync(filename + '/' + files[i] + '.js')) {
        results.components.push('components/' + files[i] + '/' + files[i]);
      } else if (fs.existsSync(filename + '/' + files[i] + '.html')) {
        results.components.push('text!components/' + files[i] + '/' + files[i] + '.html');
      }

      if (fs.existsSync(filename + '/' + files[i] + '.less')) {
        results.lesses.push('components/' + files[i] + '/' + files[i] + '.less');
      }
    }
  }
  return results;
};


module.exports = getComponents;
