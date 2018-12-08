const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const tsify = require('tsify')
const paths = {
    pages: ['src/*.html']
}

gulp.task('gulp-html', () => {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"))
})

gulp.task("default", ['copy-html'], () => {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
})