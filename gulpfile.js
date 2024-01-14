const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
sass.compiler = require("node-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const gulp = require("gulp");
const webp = require("gulp-webp");
var htmlmin = require("gulp-html-minifier");
const minify = require("gulp-minify");
var concat = require("gulp-concat");

function css() {
  return src("scss/*.scss")
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(dest("css"));
}

// Watch minifyjs
function minifyjs() {
  return src("./js/*.js", { allowEmpty: true })
    .pipe(minify({ noSource: true }))
    .pipe(concat("main.js"))
    .pipe(dest("./js/min"));
}

gulp.task("webp", function () {
  gulp.src("images/**/*.*").pipe(webp()).pipe(gulp.dest("images/webp"));
});

gulp.task("minify", function () {
  gulp
    .src("./src/*.php")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));
});

// Watch files
function watchFiles() {
  watch(["scss"], css);
  watch(["./js/*.js"], minifyjs);
}

exports.default = series(css, minifyjs);
exports.watch = watchFiles;
