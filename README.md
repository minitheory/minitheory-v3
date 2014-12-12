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

You'll need to be familiar with [Jade](http://jade-lang.com) and
[Sass](http://sass-lang.com/) to work on this project.

## Requirements

You'll need to have the following items installed before continuing.

  * [Ruby](http://www.ruby-lang.org/)
  * [Node.js](http://nodejs.org)
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart

```bash
git clone git@github.com:minitheory/minitheory-v3.git
npm install && bower install && bundle install
```

While you're working on your project, run:

```
grunt watch
```

And you're set!

## Directory Structure

  * `source`: Source code goes here
    * `source/sass/_settings.sass`: Foundation configuration settings go in here
    * `source/sass/app.sass`: Application styles go here
  * `build`: Production files get compiled and moved here
