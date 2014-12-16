module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      build: {
        expand: true,
        cwd: 'source/',
        src: ['img/**', 'js/**'],
        dest: 'build/'
      }
    },

    jade: {
      build: {
        expand: true,
        cwd: 'source/',
        src: ['**/*.jade'],
        dest: 'build/',
        ext: '.html'
      }
    },

    sass: {
      build: {
        files: {
          'build/css/app.css': 'source/sass/app.sass'
        },
        options: {
          bundleExec: true,
          compass: true,
          loadPath: ['bower_components/foundation/scss'],
          style: 'compressed'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      jade: {
        files: 'source/**/*.jade',
        tasks: ['jade']
      },

      sass: {
        files: 'source/sass/**/*.sass',
        tasks: ['sass']
      },

      others: {
        files: ['img/**.*', '**/*.js'],
        tasks: ['newer:copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('build', ['copy','jade','sass']);
  grunt.registerTask('default', ['build','watch']);
}
