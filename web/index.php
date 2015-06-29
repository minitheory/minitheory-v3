<?php

require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

$app->register(new Silex\Provider\UrlGeneratorServiceProvider());
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));
$app->register(new SilexMtHaml\MtHamlServiceProvider());

$app['env'] = $_ENV['SILEX_ENV'];

if ($app['env'] == 'development') {
    $app['debug'] = true;

    // Allow Silex to serve static files with PHP 5.4 web server
    // Details at http://silex.sensiolabs.org/doc/web_servers.html#php-5-4

    $filename = __DIR__.'/../'.preg_replace('#(\?.*)$#', '', $_SERVER['REQUEST_URI']);
    if (php_sapi_name() === 'cli-server' && is_file($filename)) {
        return false;
    }
}

// Routes

$app->get('/', function () use ($app) {
    return $app['twig']->render('homepage.html.haml');
})
->bind('homepage');

$app->get('/about', function () use ($app) {
  return $app->redirect('/about/company');
});

$app->get('/about/company', function () use ($app) {
    return $app['twig']->render('about/company.html.haml');
})
->bind('about_company');


$app->get('/about/culture', function () use ($app) {
    return $app['twig']->render('about/culture.html.haml');
})
->bind('about_culture');

$app->get('/contact', function() use ($app) {
    return $app['twig']->render('contact.html.haml');
})
->bind('contact');

$app->get('/services', function() use ($app) {
    return $app['twig']->render('services.html.haml');
})
->bind('services');

$app->get('/work', function() use ($app) {
    return $app['twig']->render('work.html.haml');
})
->bind('work');

$app->get('/work/creative', function() use ($app) {
    return $app['twig']->render('work/creative.html.haml');
})
->bind('work_creative');

$app->get('/work/indinero', function() use ($app) {
    return $app['twig']->render('work/indinero.html.haml');
})
->bind('work_indinero');

$app->get('/work/ninja-accountant', function() use ($app) {
  return $app['twig']->render('work/ninjaaccountant.html.haml');
})
->bind('work_ninja_accountant');

$app->get('/work/travelmob', function() use ($app) {
    return $app['twig']->render('work/travelmob.html.haml');
})
->bind('work_travelmob');

$app->get('/work/bellabox', function() use ($app) {
    return $app['twig']->render('work/bellabox.html.haml');
})
->bind('work_bellabox');

$app->get('/work/aiji', function() use ($app) {
    return $app['twig']->render('work/aiji.html.haml');
})
->bind('work_aiji');

$app->get('/work/skinnymint', function() use ($app) {
    return $app['twig']->render('work/skinnymint.html.haml');
})
->bind('work_skinnymint');

$app->error(function (\Exception $e, $code) use ($app) {
    switch ($code) {
        case 404:
            if ($app['debug']) {
                return;
            }
            else {
                return $app['twig']->render('errors/404.html.haml');
            }
        default:
            if ($app['debug']) {
                return;
            }
            else {
                return $app['twig']->render('errors/default.html.haml');
            };
    }
});

$app->run();
