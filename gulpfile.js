var gulp = require('gulp'),
    sass= require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer');

// Styles
gulp.task('sass', function(){
  return sass('source/sass/app.sass', {
    style: 'expanded',
    bundleExec: true,
    compass: true,
    loadPath: ['bower_components/foundation/scss']
    })
  //.pipe(sass({style: 'expanded', sourcemap: false}))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest('assets/css/app.css'));
});

// Default task
gulp.task('default', function(){
  gulp.start('sass');
});

// Watch
gulp.task('watch', function(){
  gulp.watch('source/sass/**/*.scss', ['sass']);
});

//Build
gulp.task('build', function(){
  gulp.src('source/js/**')
    .pipe(gulp.dest('assets/js'));
  gulp.src('bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('assets/js/vendor/jquery.min.js'));
  gulp.src('bower_components/foundation/js/foundation.min.js')
    .pipe(gulp.dest('assets/js/vendor/foundation.min.js'));
  gulp.src('bower_components/modernizr/modernizr.js')
    .pipe(gulp.dest('assets/js/vendor/modernizr.js'));
  gulp.src('bower_components/masonry/dist/masonry.pkgd.min.js')
    .pipe(gulp.dest('assets/js/vendor//masonry.min.js'));

  gulp.start('sass');
});