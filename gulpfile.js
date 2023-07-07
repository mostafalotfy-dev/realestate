const {src,dest,watch} = require("gulp");
const pug = require("gulp-pug");
const prettify = require("gulp-html-prettify")

pugwatch = exports.pug = function(cb){
    src("Views/View/*/index.pug")
    .pipe(pug())
    .pipe(prettify())
    .pipe(dest("./dist"))
   
     cb()
}

exports.watch = ()=>{
    watch("Views/View/*/index.pug",pugwatch)
  
  
}