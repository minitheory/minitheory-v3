module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: 'source/',
            src: 'js/**',
            dest: 'web/'
          },
          {
            src: 'bower_components/jquery/dist/jquery.min.js',
            dest: 'web/js/vendor/jquery.min.js'
          },
          {
            src: 'bower_components/foundation/js/foundation.min.js',
            dest: 'web/js/vendor/foundation.min.js'
          },
          {
            src: 'bower_components/modernizr/modernizr.js',
            dest: 'web/js/vendor/modernizr.js'
          },
          {
            src: 'bower_components/masonry/dist/masonry.pkgd.min.js',
            dest: 'web/js/vendor/masonry.min.js'
          }]
      }
    },

    sass: {
      build: {
        files: {
          'web/css/app.css': 'source/sass/app.sass'
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

      sass: {
        files: 'source/sass/**/*.sass',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('build', ['copy', 'sass']);
  grunt.registerTask('default', ['build', 'watch']);
}
