const gulp = require('gulp');
const apidoc = require('gulp-apidoc');
// const browerSync = require('brower-sync')

gulp.task('apidoc', function(done){
          apidoc({
            src: "app/",
            dest: "build/",
            debug: true,
            includeFilters: [ "routes/.*\\.js$" ]
            
            // includeFilters: [".*\\.controller\\.js$"]
          },done);
});
// gulp.task('copyHtml',gulp.series(function (done) {
//   gulp.src('coverage/*.html')
//   .pipe(gulp.dest('build'))
//   .pipe(browerSync.stream())
//   done()
// }))