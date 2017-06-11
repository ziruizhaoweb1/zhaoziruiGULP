var gulp=require("gulp");
var htmlmin=require("gulp-htmlmin");
var cssmin=require("gulp-clean-css");
var jsmin = require('gulp-uglify');
var webserver=require("gulp-webserver");
gulp.task("htmlmin",function(){
    gulp.src("src/html/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("bound/html/"))
})
gulp.task("cssmin",function(){
    gulp.src("src/css/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("bound/css/"))
})
gulp.task("jsmin",function(){
    gulp.src("src/js/*.js")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("bound/js/"))
})
gulp.task("server",["htmlmin","cssmin","jsmin"],function(){
    gulp.watch("./src/html/*.html",["htmlmin"])
    gulp.watch("./src/css/*.css",["cssmin"])
    gulp.watch("./src/js/*.js",["jsmin"])
    gulp.src("./bound")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open:"./html"
        }))
})
