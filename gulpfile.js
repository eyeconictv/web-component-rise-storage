(function () {
  "use strict";

  var gulp = require("gulp");
  var bump = require("gulp-bump");
  var jshint = require("gulp-jshint");
  var runSequence = require("run-sequence");
  var watch = require("gulp-watch");
  var wct = require("web-component-tester").gulp.init(gulp);

  gulp.task("bump", function() {
    gulp.src(["./package.json"])
      .pipe(bump({type:"patch"}))
      .pipe(gulp.dest("./"));

    gulp.src(["./rise-storage/bower.json"])
      .pipe(bump({type:"patch"}))
      .pipe(gulp.dest("./rise-storage/"));
  });

  gulp.task("lint", function() {
    return gulp.src("./rise-storage/*.html")
      .pipe(jshint.extract("always"))
      .pipe(jshint())
      .pipe(jshint.reporter("jshint-stylish"))
      .pipe(jshint.reporter("fail"));
  });

  gulp.task("watch",function(){
    gulp.watch("./rise-storage/*.html", ["build"]);
  });

  gulp.task("build", function (cb) {
    runSequence(["lint"], cb);
  });

  gulp.task("default", function(cb) {
    runSequence("test:local", "build", cb);
  });
})();
