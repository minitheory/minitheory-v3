<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));
$app->register(new SilexMtHaml\MtHamlServiceProvider());

// Routes

$app->get('/', function () use ($app) {
    return $app['twig']->render('homepage.html.haml');
});

$app->run();
