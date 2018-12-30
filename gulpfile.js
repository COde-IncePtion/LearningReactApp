"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");

var browserify = require('browserify'); // Bundle JS
var reactify = require('reactify');  // Transform React JSX to JS
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

var config = {
    port: 9080,
    devBaseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        dist: "./dist",
        js: './src/**/*.js',
        mainJs: './src/main.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ]
    }
};


// this task will start the local dev server
gulp.task("connect", function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});


// this task will open index.html on the default view of the server
gulp.task("open", ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});


// this task will move the html file from source to dist and reload
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
})

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
})


// this task will monitor the js files
gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
})

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
})


gulp.task('default', ['open', 'html', 'js', 'watch', 'css']);