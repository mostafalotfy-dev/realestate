const mix = require("laravel-mix");


mix
.sass("scss/main.scss","dist")

.js("js/main.js","dist")
.disableSuccessNotifications()


