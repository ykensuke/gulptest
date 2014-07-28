var gulp = require('gulp');
var bower = require('bower');
var clean = require('gulp-rimraf');
var typescript = require('gulp-tsc');

gulp.task('bower', function() {
	bower.commands.install().on('end',function(installed){
		// gulp.src([
		// 	'bower_components/jquery/jquery.min.js'
		// 	]).pipe(gulp.dest('./build/js/jquery'));
		// gulp.src([
		// 	'static/**'
		// 	]).pipe(gulp.dest('./build/'));
		gulp.start('lib','tsc','static');
	});
});

gulp.task('lib',function(){
	gulp.src(['bower_components/jquery/jquery.min.js'])
		.pipe(gulp.dest('build/js/jquery'));
});


gulp.task('static',function(){
	gulp.src(['static/**'])
		.pipe(gulp.dest('build/'));
});

gulp.task('tsc',function(){
	gulp.src(['tsc/*.ts'])
		.pipe(typescript())
		.pipe(gulp.dest('build/js/app/'));
});

gulp.task('clean',function(){
	gulp.src('build/').pipe(clean());
});


gulp.task('default',['clean'],function(){
	gulp.start('bower');
});

// gulp.task('develop',function(){
// 	gulp.watch('static/**',function(){
// 		gulp.start('static');
// 	});
// 	gulp.watch('tsc/*.ts',function(){
// 		gulp.start('tsc');
// 	});
// });
