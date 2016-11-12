var fs = require('fs');
var lessPath = 'public/main.less';
var lessDestinationDir = './public/app/temp';
var lessDestination = lessDestinationDir + '/main.less';

var createLess = function(components) {
  'use strict';

  fs.readFile(lessPath, 'utf8', function(err, less) {
    if (err) {
      console.log('Error: ', err);
      return;
    }

    var lesses = components.lesses;
    var output = '';

    lesses.forEach(function(less) {
      output += '@import "../../' + less + '";\n';
    });

    less = less.replace('// components', output);
    fs.mkdir(lessDestinationDir, function(e) {
      if(!e || (e && e.code === 'EEXIST')) {
        fs.writeFile(lessDestination, less, function(err) {
          if(err) {
            return console.log(err);
          }

          console.log('main.less saved succesfully');
        });
      } else {
        console.log(e);
      }
    });
  });
};


module.exports = createLess;
