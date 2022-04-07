const gulp = require('gulp');

module.exports = function fonts() {
  return gulp.src('src/docs/*').pipe(gulp.dest('build/docs'));
};
