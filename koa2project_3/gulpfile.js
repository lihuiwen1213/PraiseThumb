// https://github.com/babel/gulp-babel
const gulp = require('gulp');
const babel = require('gulp-babel');
const manifest = require('gulp-manifest');

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

gulp.task('manifest', function(){
  gulp.src(['build/public/**/*'], { base: './build' })
    .pipe(manifest({
      hash: true,
      preferOnline: true,
      network: ['*'],
      filename: 'app.manifest',
      exclude: 'public/app.manifest',
     }))
    .pipe(gulp.dest('build/public'));
});