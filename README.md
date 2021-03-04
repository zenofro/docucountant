# Docucountant

Docucountant is a simple SPA to document your favourite projects.  
Made with Laravel + Inertia + Vue.

## Requirements

- Tinymce API key (free)
- ffmpeg installed on server

## Installation

- Clone project
- `composer install`
- Set up .env file (database, Tinymce API, ffmpeg location)
- `php artisan key:generate`
- `php artisan migrate --seed`
- `npm install && npm run prod` 
- Set up an artisan worker  
- Login with user 'admin@docucountant.com' and password 'password'
- Enjoy!
