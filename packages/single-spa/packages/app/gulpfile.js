const gulp = require('gulp');
const { deleteAsync } = require('del');


function _copy(src, dest) {
  return function __copy() {
    return gulp
      .src(src)
      .pipe(gulp.dest(dest));
  }
}

function _del(src) {
  const s = src.endsWith('/*') ? src.substring(0, src.length - 2) : src;
  return function __del() {
    return deleteAsync(s);
  }
}

function _move(src, dest) {
  return gulp.series(_copy(src, dest), _del(src));
}

gulp.task('move:fonts', _move('.dist/app/rsrc/dist/fonts/*', '.dist/app/rsrc/fonts'));
gulp.task('move:manifest', _move('.dist/app/rsrc/dist/asset-manifest.json', '.dist/app'));
gulp.task('move:index', _move('.dist/app/rsrc/dist/index.html', '.dist/app'));
gulp.task('move', gulp.parallel('move:fonts', 'move:manifest', 'move:index'))
