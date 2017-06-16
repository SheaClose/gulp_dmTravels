const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const urlAdjuster = require('gulp-css-url-adjuster');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// gulp.task('dependentTask', function() {
//   console.log('dependentTask');
// });

gulp.task('concatCss', function() {
  return gulp
    .src('styles/**/*.css')
    .pipe(
      urlAdjuster({
        replace: ['../../img', '../../../../img']
      })
    )
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('./dist/assets/styles'));
});

gulp.task('uglifyJs', function() {
  return gulp
    .src('js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('default', ['concatCss', 'uglifyJs'], function() {});

// gulp.watch('js/app.js', ['default']);
