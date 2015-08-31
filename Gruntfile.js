module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    wiredep: {
      task: {
        src: [
          '*.html'
        ]
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js', '**/*.html', '*.json', '*.css', '**/*.less'],
        tasks: ['wiredep']
        // options: {
        //   spawn: false,
        // },
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/*.less',
            'js/*.js',
            '*.json',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['wiredep', 'browserSync', 'watch']);

};
