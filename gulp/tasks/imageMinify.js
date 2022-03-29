const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function imageMinify() {
  return gulp
    .src(['src/img/**/*.{gif,png,jpg,jpeg,svg,webp}'])
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({
          quality: 75,
          progressive: true
        }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        }),
        imagemin.optipng({ optimizationLevel: 5 })
      ])
    )
    .pipe(gulp.dest('build/assets/img'));
};
