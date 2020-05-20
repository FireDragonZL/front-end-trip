/**
 * 定义 gulp flow 的处理逻辑
 * => 支持串行输入和并行输入
 * => 每一个 function 都是一个 gulp task
 */

 // 导入 gulp 自带的方法 (series 表示串行执行)
 const { src, dest, watch, series } = require('gulp')
 // 协助 gulp 导入其他插件（不知道为什么没效果）
 const plugins = require('gulp-load-plugins')
 // 基于 plugin 导入其他插件
 plugins.uglify = require('gulp-uglify')

 const del = require('del')
 const sass = require('gulp-sass')
 const autoprefixer = require('gulp-autoprefixer')

 // 压缩 JS 文件 —— callback 用于异步执行成功后进行响应
 function js (callback) {
    // 要处理的源文件
    src("./js/*.js")
      // 下一个处理环节
      .pipe(plugins.uglify())
      .pipe(dest("./dist/js"))
    callback()
 }

 // 将 sass/less 等文件输出为 css 文件格式
 function css (callback) {
      src("./css/*.scss")
         .pipe(sass({ outputStyle: 'compressed'}))
         .pipe(autoprefixer({
            cascade: false,
            remove: false
         }))
         .pipe(dest("./dist/css"))
      callback()
 }

 // 监听文件的变化(另外也可以配置html页面的变化)
 function watcher (callback) {
    watch('./js/*.js', js)
    watch('./css/*.scss', css)
    callback()
 }

 // 清空 dist 目录
 function clean (callback) {
    del('./dist')
    callback()
 }

 exports.scripts = js
 exports.styles = css
 exports.clean = clean
 exports.default = series([
    clean,
    js,
    css,
    watcher
 ])