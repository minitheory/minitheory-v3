module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      build: {
        expand: true,
        cwd: 'source/',
        src: ['**/*.html', 'js/**'],
        dest: 'build/'
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'build/css/app.css': 'source/scss/app.scss'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'source/scss/**/*.scss',
        tasks: ['sass']
      },

      others: {
        files: ['**/*.html', '**/*.js'],
        tasks: ['newer:copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('build', ['copy','sass']);
  grunt.registerTask('default', ['build','watch']);
}
