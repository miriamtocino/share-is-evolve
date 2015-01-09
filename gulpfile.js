'use strict';
// generated on 2014-08-11 using generator-gulp-webapp 0.1.0

var gulp = require('gulp'),
    beep = require('beepbeep');


// load plugins
var $ = require('gulp-load-plugins')(),
        mainBowerFiles = require('main-bower-files');

var onError = function (err) {
    beep([0, 0, 0]);
    $.util.log($.util.colors.yellow(err));
};

// Temporal FIX for caching problems with gulp_cache (RL) (forces to empty all caches)
gulp.task('clear-cache', function(done) {
    return $.cache.clearAll(done);
});

// Compile .kit templates
gulp.task('kit', ['kit-images'],function() {
    return gulp.src([
                     'app/_pages/*.kit'
                     ])
    .pipe($.kit())
    .pipe(gulp.dest('app/_kit'));
});

gulp.task('styles', function () {
    return gulp.src('app/styles/*.scss')
        .pipe($.plumber({
            errorHandler: onError
        }))
        .pipe($.rubySass({
            compass: true,
            style: 'expanded',
            precision: 10,
            cacheLocation: './cache/.sass-cache'
        }))
        .pipe($.autoprefixer('last 5 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size());
});

/*gulp.task('styles', function () {
    gulp.src('app/styles/*.scss')
        .pipe($.plumber({
            errorHandler: onError
        }))
        .pipe($.sass())
        .pipe($.autoprefixer('last 5 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe($.size());
});*/

gulp.task('scripts', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.plumber())
        //.pipe($.jshint())
        //.pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size());
});

gulp.task('html', ['kit', 'styles', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src(['app/*.html', 'app/_kit/*.html'])
        .pipe($.plumber())
        .pipe($.useref.assets({searchPath: '{.tmp,app}'}))
        .pipe(jsFilter)
        //.pipe($.rename('main.min.js'))
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        //.pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.plumber())
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

gulp.task('kit-images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.plumber())
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('app/_kit/images'))
        .pipe($.size());
});

gulp.task('fonts', function () {
  return gulp.src(['./app/fonts/**/*'] , { base: './app/fonts/'})
      .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
      .pipe(gulp.dest('dist/fonts'))
});

gulp.task('assets', function () {
    return gulp.src(['./app/assets/**/**/**/*'] , { base: './app/assets/'})
    //.pipe($.flatten())
      .pipe(gulp.dest('dist/assets'))
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html', '!app/*.kit'], { dot: true })
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist', 'app/_kit'], { read: false }).pipe($.rimraf());
});

gulp.task('build', ['html', 'images', 'assets', 'fonts', 'extras']);

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect', 'styles'], function () {
    require('opn')('http://localhost:9000/_kit');
});

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    gulp.src('app/styles/*.scss')
        .pipe(wiredep({
            directory: 'app/bower_components'
        }))
        .pipe(gulp.dest('app/styles'));

    gulp.src('app/_kit/*.html')
        .pipe(wiredep({
            directory: 'app/bower_components'
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', ['kit', 'connect', 'serve'], function () {
    var server = $.livereload();

// watch for changes
    gulp.watch([
        'app/*.html',
        'app/**/*.html',
        'app/**/**/*.kit',
        '.tmp/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*',
        'app/assets/**/**/**/**/*'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch(['app/_pages/**/*.kit', 'app/_src/*.kit'], ['kit']);
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('app/assets/**/**/**/**/*', ['assets']);
    gulp.watch('bower.json', ['wiredep']);
});
