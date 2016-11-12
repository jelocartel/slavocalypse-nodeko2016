'use strict';

/* jshint node: true */

module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.initConfig({
    config: {
      src: 'public',
      dist: 'dist',
      images: 'images'
    },
    watch: {
      livereload: {
         options: {
           livereload: '<%= connect.options.livereload %>'
         },
         files: [
           '<%= config.src %>/*.html',
           '<%= config.src %>/**/**/*.js',
           '<%= config.src %>/**/**/*.html',
           '<%= config.src %>/**/**/*.less',
           '<%= config.src %>/<%= config.images %>/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
         ],
         tasks: [
           'build'
         ]
      },
      dev: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.src %>/*.html',
          '<%= config.src %>/**/**/*.js',
          '<%= config.src %>/**/**/*.html',
          '<%= config.src %>/**/**/*.less',
          '<%= config.src %>/<%= config.images %>/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
        ],
        tasks: [
          'less:dev'
        ]
      }
    },
    processhtml: {
      dist: {
        files: {
          '<%= config.dist %>/index.html': ['<%= config.src %>/index.html']
        }
      }
    },
    // requirejs: {
    //   compile: {
    //     options: {
    //       'baseUrl': 'src',
    //       'mainConfigFile': 'src/app/temp/require.config.dist.js',
    //       'paths': {
    //           'knockout': 'bower_modules/knockout/dist/knockout',
    //           'text':     'bower_modules/requirejs-text/text'
    //       },
    //
    //       'name': 'app/startup',
    //       'out': 'dist/js/hyanza.js',
    //       preserveLicenseComments: false,
    //       include: [
    //         'bower_modules/requirejs/require.js',
    //         'bower_modules/apress/apress.js',
    //         'bower_modules/nanoajax/nanoajax.min.js'
    //       ]
    //     }
    //   }
    // },
    copy: {
      main: {
        files: [
          {expand: true, src: ['<%= config.src %>/<%= config.images %>/**'], flatten: true, dest: '<%= config.dist %>/<%= config.images %>/', filter: 'isFile'}
        ]
      },
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },

      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      },
      dev: {
        options: {
          open: true,
          base: [
            '<%= config.src %>'
          ]
        }
      }
    }
  });

  grunt.registerTask('dev', ['connect:dev', 'watch:dev']);
  // grunt.registerTask('html', ['processhtml']);
  // grunt.registerTask('build', ['copy', 'html', 'js', 'css']);
  // grunt.registerTask('serve', ['build', 'connect:livereload', 'watch:livereload']);
};
