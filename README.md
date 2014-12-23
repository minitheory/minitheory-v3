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
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone git@github.com:minitheory/minitheory-v3.git
composer install && npm install && bower install && bundle install
```

While you're working on your project, run:

```
grunt watch
```

And you're set!

## Directory Structure

  * `./assets/img`: Images go here
  * `./source/js`: JavaScript code
  * `./source/sass`: Sass code
    * `./source/sass/_settings.sass`: Foundation configuration settings
    * `./source/sass/app.sass`: Application styles  
  * `./views`: Haml templates
  * ``./web`: Silex router index.php file goes here

## Deploying

When you are ready to deploy the site, first run:

```
grunt build
```

This will generate and copy the appropriate files into the `assets` directory.

Next, upload the following directories and files to the server:

```
.htaccess
assets
vendor
views
web
```

**Note:** The `vendor` folder does not need to be re-uploaded unless your have
changed the project's PHP dependencies in `composer.json`.
