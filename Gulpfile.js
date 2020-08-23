var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("serve", function () {
  browserSync.init({
    server: "."
  });
});

gulp.task("watch", function () {
  gulp.watch("index.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("serve", "watch"));
