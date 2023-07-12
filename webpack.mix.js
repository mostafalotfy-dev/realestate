const mix = require("laravel-mix");

mix
.sass("fontawesome/scss/main.scss","dist")
.pug("Components/**/*.pug")
.js("fontawesome/js/main.js","dist")

.disableSuccessNotifications()


