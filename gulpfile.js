'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var imageminMozJpeg = require('imagemin-mozjpeg');
var imageminPngQuant = require('imagemin-pngquant');
var clean = require('gulp-clean');

// *************** Development Server configuration ***************//
gulp.task('html', () => {
  return gulp
    .src('./src/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(
      browserSync.stream({
        reload: true
      })
    );
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('all.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./build'))
    .pipe(
      browserSync.stream({
        reload: true
      })
    );
});

gulp.task('js', function () {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
    .pipe(
      browserSync.stream({
        reload: true
      })
    );
});

gulp.task('image', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imageminMozJpeg(),
            imageminPngQuant({quality:'50-100'}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest('build/img'));
});

gulp.task('clean', () => {
  return gulp.src('./build', { allowEmpty: true, read: false }).pipe(clean());
});

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });
});


gulp.task('build', sequence('clean', 'html', 'sass', 'js', 'image', 'server' ), () => {
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/img/*', ['image']);
});

// *************** Ends Development Server configuration ***************//


