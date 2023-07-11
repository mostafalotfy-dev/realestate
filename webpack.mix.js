const mix = require("laravel-mix");


mix
.sass("fontawesome/scss/main.scss","dist")

.js("fontawesome/js/main.js","dist")
.webpackConfig({
    
})
.disableSuccessNotifications()


