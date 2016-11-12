var fs = require('fs');
var configPath = 'public/app/require.config.js';
var configDestinationDir = './public/app/temp';
var devConfigDestination = configDestinationDir + '/require.config.js';
var distConfigDestination = configDestinationDir + '/require.config.dist.js';
var _eval = require('eval');

var createConfig = function(components) {
  'use strict';
  components = components.components;

  fs.readFile(configPath, 'utf8', function(err, config) {
    if (err) {
      console.log('Error: ', err);
      return;
    }

    config = config.replace('// components', 'components: ' + JSON.stringify(components));
    fs.mkdir(configDestinationDir, function(e) {
      if(!e || (e && e.code === 'EEXIST')) {
        fs.writeFile(devConfigDestination, config, function(err) {
          if(err) {
            return console.log(err);
          }

          console.log('Dev Config saved succesfully');

          var reqConfig = _eval('var window = {}' + config + 'module.exports = require;');
          fs.writeFile(distConfigDestination, '(' + JSON.stringify(reqConfig, 2, 2) + ')', function(err) {
            if(err) {
              return console.log(err);
            }

            console.log('Dist Config saved succesfully');
          });
        });
      } else {
        console.log(e);
      }
    });
  });
};


module.exports = createConfig;
