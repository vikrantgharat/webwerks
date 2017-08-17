var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var Promise = require('bluebird');

var watch = require('gulp-watch');
var wiredep = require('wiredep').stream;
var del = require('del');

var minifyCss = require("gulp-minify-css");

gulp.task('clean', function(cb){
  del(['dist'], cb);
});

gulp.task('styles', function(){
  var injectAppFiles = gulp.src('src/styles/*.scss', {read: false});
  var injectGlobalFiles = gulp.src('src/global/*.scss', {read: false});
 
  function transformFilepath(filepath) {
    return '@import "' + filepath + '";';
  }
 
  var injectAppOptions = {
    transform: transformFilepath,
    starttag: '// inject:app',
    endtag: '// endinject',
    addRootSlash: false
  };

  var injectGlobalOptions = {
    transform: transformFilepath,
    starttag: '// inject:global',
    endtag: '// endinject',
    addRootSlash: false
  };
 
  return gulp.src('src/main.scss')
  	.pipe(wiredep())
  	.pipe(inject(injectGlobalFiles, injectGlobalOptions))
    .pipe(inject(injectAppFiles, injectAppOptions))
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('html', ['styles'], function(){
  var injectFiles = gulp.src(['dist/styles/main.css']);
 
  var injectOptions = {
    addRootSlash: false,
    ignorePath: ['src', 'dist']
  };
 
  return gulp.src('src/*.html')
    .pipe(inject(injectFiles, injectOptions))
    .pipe(gulp.dest('dist'));
});

// minify-css
gulp.task('minify-css', function () {
    gulp.src('dist/styles/main.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/styles'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch(['src/*.html','src/*.scss', 'src/styles/*.scss', 'src/global/*.scss'],['styles','html']);
    gulp.watch(['src/*.html'],['html']);
});