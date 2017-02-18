var gulp=require('gulp');
var sass=require('gulp-sass');
var serve=require('gulp-webserver-fast');
	gulp.task("sass",function(){
		gulp.src('scss/style.scss')
			.pipe(sass())
			.pipe(gulp.dest('css/'))		
	})
	gulp.task('server',function(){
		gulp.watch('scss/style.scss',["sass"])
		return gulp.src('./')
		.pipe(serve({
			livereload: true,
	        directoryListing: true,
	        open: true,
	        port:7000
		}))
	})
