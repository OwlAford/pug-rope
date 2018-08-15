'use strict'
const ip = require('ip')
const opn = require('opn')
const gulp = require('gulp')
const pug = require('gulp-pug')
const chalk = require('chalk')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('pack', () => {
  ['css', 'images', 'js', 'pages', 'fonts', 'media'].forEach(item => {
    gulp.src(`./${item}/**/*`)
      .pipe(gulp.dest(`public/${item}`))
  })
})

gulp.task('pug', () =>
  gulp.src('pug/pages/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./pages'))
  .pipe(connect.reload())
)

gulp.task('pug:watch', () =>
  gulp.watch(['pug/**/*.pug', 'pug/**/*.js'], ['pug'])
)

gulp.task('sass', () =>
  gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(
    sass({
      outputStyle: 'expanded'
    })
    .on('error', sass.logError)
  )
  .pipe(autoprefixer({
    browsers: [
      '> 1%',
      'last 2 versions'
    ],
    cascade: false
  }))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./css'))
  .pipe(connect.reload())
)

gulp.task('reload', () => {
  gulp.src('./')
    .pipe(connect.reload())
})

gulp.task('sass:watch', () =>
  gulp.watch('./sass/**/*.scss', ['sass'])
)

gulp.task('file:watch', () => {
  gulp.watch(['./fonts/**/*', './images/**/*', './media/**/*'], ['reload'])
})

gulp.task('serve', () => {
  const port = 3000
  const uri = `http://${ip.address()}:${port}`
  const lanUrlForTerminal = uri + '/pages'
  const localUrlForTerminal = `http://localhost:${port}/pages`
  connect.server({
    livereload: true,
    // root: 'static',
    port
  })
  console.log(`Server is running at:\n`);
  console.log(
    `  ${chalk.bold('Local:')}    ${localUrlForTerminal}`
  )
  console.log(
    `  ${chalk.bold('Network:')}  ${lanUrlForTerminal}\n`
  )
  opn(localUrlForTerminal)
})

gulp.task('start', ['sass', 'pug', 'sass:watch', 'pug:watch', 'file:watch', 'serve'])
