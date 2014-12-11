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
      build: {
        files: {
          'build/css/app.css': 'source/sass/app.sass'
        },
        options: {
          bundleExec: true,
          loadPath: ['bower_components/foundation/scss'],
          style: 'compressed'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'source/sass/**/*.sass',
        tasks: ['sass']
      },

      others: {
        files: ['**/*.html', '**/*.js'],
        tasks: ['newer:copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('build', ['copy','sass']);
  grunt.registerTask('default', ['build','watch']);
}
