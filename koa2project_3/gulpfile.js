// https://github.com/babel/gulp-babel
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default',['praise'],()=>{
	gulp.watch(['src/**/*.es'],['praise'])
})

gulp.task('praise', () =>
    // 这里return会报错   Unexpected token return
    gulp.src(['src/**/*.es','!src/public/*/*.es'])
    .pipe(babel({
        presets: ['es2015',
            'stage-0'
        ]
    }))
    .pipe(gulp.dest('./build'))
);
