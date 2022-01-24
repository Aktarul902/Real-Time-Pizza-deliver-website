let mix = require('laravel-mix');

mix.js('resouces/js/app.js', 'public/js/app.js').sass('resources/scss/app.scss','public/css/style.css');