<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app['debug'] = true;

$app->register(new Silex\Provider\UrlGeneratorServiceProvider());
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));
$app->register(new SilexMtHaml\MtHamlServiceProvider());

// Allow Silex to serve static files with PHP 5.4 web server
// Details at http://silex.sensiolabs.org/doc/web_servers.html#php-5-4

$filename = __DIR__.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
if (php_sapi_name() === 'cli-server' && is_file($filename)) {
    return false;
}

// Routes

$app->get('/', function () use ($app) {
    return $app['twig']->render('homepage.html.haml');
})
->bind('homepage');

$app->get('/services', function() use ($app) {
    return $app['twig']->render('services.html.haml');
})
->bind('services');

$app->get('/work', function() use ($app) {
    return $app['twig']->render('work.html.haml');
})
->bind('work');

$app->get('/work/travelmob', function() use ($app) {
    return $app['twig']->render('work/travelmob.html.haml');
})
->bind('work_travelmob');

$app->run();
