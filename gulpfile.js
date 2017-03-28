var gulp = require('gulp');
var concat = require('concat');
var uglify = require('gulp-uglify');

var notify = require('gulp-notify');

var minifyCSS = require('gulp-minify-css');

gulp.task('script', function(){
	concat(['./src/js/ciudadesJSON.js', './src/js/vehiculosJSON.js','./src/js/map_1.js','./src/js/custom.js'], 'script.js');

	return gulp.src('./src/js/*.css')
	.pipe(concat(gulp.dest("./dist")));
});

gulp.task('style', function() {
	concat(['./src/css/style.css'], 'style.css');
	return gulp.src('./src/js/*.css')
	.pipe(concat(gulp.dest("./dist")));
});

gulp.task('images', function() {
	concat(['./src/css/img'], 'img');
	return gulp.src('./src/js/*.css')
	.pipe(concat(gulp.dest("./dist")));
});

