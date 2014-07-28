var gulp = require('gulp');
var bower = require('bower');
var clean = require('gulp-rimraf');

gulp.task('bower', function() {
	bower.commands.install().on('end',function(installed){
		gulp.src([
			'bower_components/jquery/jquery.min.js'
			]).pipe(gulp.dest('./build/js/jquery'));
	});
});


gulp.task('clean',function(){
	gulp.src('build/').pipe(clean());
});


gulp.task('default',['clean'],function(){
	gulp.start('bower');
});



// gulp.task('move1',function(){
//     gulp.watch('client/*.html',function(e){
//         if(e.type === 'changed'){
//             gulp.src(e.srd).pipe(gulp.dest('build'));            
//         }
//         //console.log(path);
//         //console.log(345678);
//     });
    
// });

// gulp.task('move2',function(){
//     gulp.src('client/img/**').pipe(gulp.dest('build2/img'));
//     gulp.src('client/css/**').pipe(gulp.dest('build2/css'));
//     gulp.src('client/*.html').pipe(gulp.dest('build2')); 
// });
