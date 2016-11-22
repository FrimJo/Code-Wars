'use strict'
const gulp = require('gulp');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const del = require('del');
const concat = require('gulp-concat')
const runSequence = require('run-sequence');
const watch = require('gulp-watch');
const nodemon = require('gulp-nodemon');
//const browserSync = require('browser-sync');
const sass = require('gulp-sass');

//Reloading server on change.
//const reload = browserSync.reload;

// SERVER
gulp.task('clean', function(){
    return del('dist')
});

gulp.task('setup:demon', function(){
    return nodemon({
        script: 'dist/server.js',
        watch: ['dist/server.js'],
        env: { 'NODE_ENV': 'development' }
      })
});

gulp.task('build:server', function () {
    const tsProject = ts.createProject('server/tsconfig.json');
    const tsResult = gulp.src('server/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
    return tsResult.js
        //.pipe(concat('server.js'))
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest('dist'))
});



// CLIENT


//We copy all images, fonts and regular html files to our dist location---------
gulp.task('build:html', () => {
    return gulp.src('./client/app/components/**/*.html')
    .pipe(gulp.dest('dist/app/components/'))
    //.pipe(reload({ stream: true }))
});

/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [

    '@angular/core/bundles/core.umd.js',
    '@angular/common/bundles/common.umd.js',
    '@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http/bundles/http.umd.js',
    '@angular/router/bundles/router.umd.js',
    '@angular/forms/bundles/forms.umd.js',

    'core-js/client/shim.min.js',
    'zone.js/dist/zone.js',
    'reflect-metadata/Reflect.js',
    'systemjs/dist/system.src.js',
    'node-gameloop/**/*',
    'physicjs/**/*',

    'rxjs/**/*',
    'angular-in-memory-web-api/**/*',
    'socket.io/**/*',
    'socket.io-client/socket.io.js',
    'angular2-jwt/**/*',
    'brace/**/*',
    'w3c-blob/**/*',
    'buffer/**/*',
    'base64-js/**/*',
    'ieee754/**/*',
    'honeyloops/**/*',
    'gl-matrix/**/*',
    'three/**/*'
]

var otherDependencies = [
    'Development/**/*',
    'TemplateData/**/*'
]

gulp.task('build:other', function(){
    const mappedPaths = otherDependencies.map(file => {return path.resolve('client/app/components/webgl', file)})

    const copyOtherDependencies = gulp.src(mappedPaths, {base:'client/app/components/webgl'})
        .pipe(gulp.dest('dist/app/components/webgl'))

    return [copyOtherDependencies];
})

gulp.task('build:index', function(){
    const mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)}) 
    
    //Let's copy our head dependencies into a dist/libs
    const copyJsNPMDependencies = gulp.src(mappedPaths, {base:'node_modules'})
        .pipe(gulp.dest('dist/libs'))
     
    //Let's copy our index into dist   
    const copyIndex = gulp.src('client/*.html')
        .pipe(gulp.dest('dist'))
        //.pipe(reload({ stream: true }))

    const copySystemConfig = gulp.src('client/app/systemjs.config.js')
        .pipe(gulp.dest('dist/libs'))

    return [copyJsNPMDependencies, copyIndex, copySystemConfig];
});

gulp.task('build:app', function(){
    const tsProject = ts.createProject('client/tsconfig.json');
    const tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
    return tsResult.js
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest('dist'))
        //.pipe(reload({ stream: true }))
});

gulp.task('build:sass', function () {
  return gulp.src('client/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        //.pipe(rename({suffix: '.min'}))
        //.pipe(minify())        
        .pipe(gulp.dest('dist/'))
        //.pipe(reload({ stream: true }))
});


gulp.task('build', function(callback){
    runSequence('clean', 'build:html', 'build:server', 'build:index', 'build:sass', 'build:other', 'build:app', 'setup:demon', callback);
});

//Watch all files and invoke task if change detected, then tell browser-sync to reload.
gulp.task('watch', ['build'], () => {

    watch(['./client/app/components/**/*.html'], () => {
        gulp.start('build:html');
    });

    watch(['./client/app/**/*'], () => {
        gulp.start('build:app')
    });

    watch(['./client/*.html'], () => {
        gulp.start('build:index')
    });

    watch(['./server/**/*'], () => {
        gulp.start('build:server')
    });

    watch(['./client/app/components/**/*.sass'], () => {
        gulp.start('build:sass')
    });

    watch(['./client/app/components/webgl/Development/**/*', './client/app/components/webgl/TemplateData/**/*'], () => {
        gulp.start('build:other')
    });

    /*browserSync.init(null, {
        proxy: "http://localhost:3011", // port of node server
        port: 7000
    });*/
});

gulp.task('default', ['watch']);