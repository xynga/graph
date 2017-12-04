const gulp = require('gulp');
const inlineTemplates = require('gulp-inline-ng2-template');

const INLINE_TEMPLATES = {
    SRC: [
        './**/*.ts',
        '!node_modules',
        '!node_modules/**',
        '!inline',
        '!inline/**',
        '!graph',
        '!graph/**'
    ],
    DIST: './inline',
    CONFIG: {
        base: '.',
        target: 'es6',
        useRelativePaths: true
    }
};

gulp.task('inline', () => {
    return gulp.src(INLINE_TEMPLATES.SRC)
        .pipe(inlineTemplates(INLINE_TEMPLATES.CONFIG))
        .pipe(gulp.dest(INLINE_TEMPLATES.DIST));
});