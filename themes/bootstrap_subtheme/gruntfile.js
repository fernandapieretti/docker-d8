var path = require('path');
const sass = require('node-sass');

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
          implementation: sass,
          sourceMap: true
      },
      dist: {
          files: {
            'css/style.css': 'css/style.sass'
          }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', 'sass');
};
