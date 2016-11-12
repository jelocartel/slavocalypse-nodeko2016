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
    less: {
      dev: {
        options: {
          compress: false,
          yuicompress: false
        },
        files: {
          '<%= config.src %>/css/main.css': '<%= config.src %>/app/temp/main.less'
        }
      }
    },
    watch: {
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
        ]
      }
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
    },
    execute: {
        target: {
            src: ['./utils/build-components-and-less.js']
        }
    }
  });

  grunt.registerTask('dev', ['execute', 'less:dev', 'connect:dev', 'watch:dev']);
  // grunt.registerTask('html', ['processhtml']);
  // grunt.registerTask('build', ['copy', 'html', 'js', 'css']);
  // grunt.registerTask('serve', ['build', 'connect:livereload', 'watch:livereload']);
};
