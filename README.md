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
- Set up an artisan worker OR set up laravel scheduler when using a web hosting with restricted access.  
  This will create a worker every minute with a maximum time alive of 50s to ensure there won't be  
  an entire army of workers at the end of the day.
- Login with user 'admin@docucountant.com' and password 'password'
- Enjoy!
