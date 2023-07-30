const mix = require("laravel-mix");

mix
.sass("assets/scss/main.scss","dist")

.js("assets/js/main.js","dist")

.disableSuccessNotifications()


