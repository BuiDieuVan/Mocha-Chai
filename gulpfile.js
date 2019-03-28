const gulp = require('gulp');
const apidoc = require('gulp-apidoc');
// const browerSync = require('brower-sync')
const plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
const mocha = require('gulp-mocha')
const log = require('gulplog')

gulp.task('apidoc', function(done){
          apidoc({
            src: "app/",
            dest: "build/",
            debug: true,
            // includeFilters: [ "routes/.*\\.js$" ]
            
            includeFilters: [".*\\.controller\\.js$"]
          },done);
});

// gulp.task('copyHtml',gulp.series(function (done) {
//   gulp.src('coverage/*.html')
//   .pipe(gulp.dest('build'))
//   .pipe(browerSync.stream())
//   done()
// }))
/* Gulp Mocha */
gulp.task('mocha', function() {
  return gulp.src(['test/*.js'], { read: false })
      .pipe(mocha({ reporter: 'list' }))
      .on('error', log.error);
});

gulp.task('watch-mocha', function() {
  gulp.watch(['lib/**', 'test/**'], gulp.series('mocha'));
});
/* Gulp Plumber */
gulp.task('plumber', () =>{
  return gulp
  .src('app/')
  .pipe(plumber({
    errorHandler: function(errror){
      console.log(error.toString());
      this.emit('end');
    }
    })
  )
  .pipe(uglify())
  .pipe(gulp.dest('build'))
});