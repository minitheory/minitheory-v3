```
 __  __ ___ _   _ ___ _____ _   _ _____ ___  ______   __
|  \/  |_ _| \ | |_ _|_   _| | | | ____/ _ \|  _ \ \ / /
| |\/| || ||  \| || |  | | | |_| |  _|| | | | |_) \ V /
| |  | || || |\  || |  | | |  _  | |__| |_| |  _ < | |  
|_|  |_|___|_| \_|___| |_| |_| |_|_____\___/|_| \_\|_|
```

# Minitheory Website 3.0

This repository contains the working files for the Minitheory company website.
It's a static website that explains the kind of work we do and showcases some
case studies drawn from our client work.

You'll need to be familiar with the following to work on this project:

* [Silex](http://silex.sensiolabs.org/) PHP micro-framework
* [Haml](http://haml.info/) markup language
* [Sass](http://sass-lang.com/) CSS preprocessor

## Requirements

You'll need to have the following items installed before continuing:

  * At least PHP 5.4
  * [Composer](http://getcomposer.org/)
  * [Ruby](http://www.ruby-lang.org/)
  * [Node.js](http://nodejs.org)
  * [Gulp](http://gulpjs.com/): Run `[sudo] npm install -g gulp`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone git@github.com:minitheory/minitheory-v3.git
composer install && npm install && bower install && bundle install
```

After the above has been installed, you'll need to build the first time round. Run:
```
gulp build
```
The site is now ready to be viewed.

While you're working on your project, run:

```
gulp watch
```

This will automatically recompile any edits to SASS files.

To start the website using PHP's built-in webserver, run:

```
SILEX_ENV=development php -d variables_order=EGPCS -S 0.0.0.0:8000 -t ./ ./web/index.php
```

## Directory Structure

  * `./assets/img`: Images go here
  * `./source/js`: JavaScript code
  * `./source/sass`: Sass code
    * `./source/sass/_settings.sass`: Foundation configuration settings
    * `./source/sass/app.sass`: Application styles  
  * `./views`: Haml templates
  * ``./web`: Silex router index.php file goes here

## Deployment

It is necessary to have [Capistrano](http://capistranorb.com/) 3.x to deploy the
site.

First, add the production git repository as a remote:

```bash
git remote add production gitolite3@megatron.minitheory.com:minitheory-website.git
```

To deploy to production:

```bash
git push production master # or other branch name
cap production deploy
```
