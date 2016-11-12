/* global requirejs */

var libs = ['knockout'];

define(libs.concat(requirejs.s.contexts._.config.components), function(ko) {
  'use strict';

  var slugify = function(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.replace(/[A-Z]/g, function(s){ return '-' + s; });
    str = str.toLowerCase();

    return str.slice(1);
  };

  var components = Array.prototype.slice.call(arguments, libs.length);
  // console.log(components)
  var name;
  components.forEach(function(component) {
    if (typeof component === 'object' && 'viewModel' in component) {
      name = slugify(component.viewModel.name);
      // console.log(name, component);
      ko.components.register(name, component);
    } else if (typeof component === 'string') {
      name = component.match(/MODULE\:(.*?) /);
      if (name.length > 1) {
        name = name[1];
      }
      if (!name) {
        throw new Error('Cannot find module name in: ' + component);
      } else {
        ko.components.register(name, {
          template: component
        });
      }
    } else {
      throw new Error('Unknow component type: ' + component);
    }
  });
});
