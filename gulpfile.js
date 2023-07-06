const {src,dest} = require("gulp");
const pug = require("gulp-pug");
const prettify = require("gulp-html-prettify")

exports.pug = function(){
    return src("Views/View/*/index.pug")
    .pipe(pug())
    .pipe(prettify())
    .pipe(dest("./output"))
}