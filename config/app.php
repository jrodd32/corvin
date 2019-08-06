<?php
/**
 * Yii Application Config
 *
 * Edit this file at your own risk!
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app.php and app.[web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 *
 * If you want to modify the application config for *only* web requests or
 * *only* console requests, create an app.web.php or app.console.php file in
 * your config/ folder, alongside this one.
 */

return [
    'modules' => [
      'contactformmodule' => [
        'class' => \modules\contactformmodule\ContactFormModule::class,
        'components' => [
          'contactform' => [
            'class' => 'modules\contactformmodule\services\ContactForm',
          ],
        ],
      ],
      'super-api' => [
        'class' => \modules\superapi\SuperApi::class,
        'components' => [
          'pages' => [
            'class' => 'modules\superapi\services\Pages',
          ],
          'routes' => [
            'class' => 'modules\superapi\services\Routes',
          ],
          'sitemap' => [
            'class' => 'modules\superapi\services\Sitemap'
          ]
        ],
      ],
      'super-search' => [
        'class' => \modules\supersearch\SuperSearch::class,
        'components' => [
            'value' => [
                'class' => 'modules\supersearch\services\ScoutService',
            ],
            'value' => [
              'class' => 'modules\supersearch\services\SearchValue',
          ],
        ],
      ],
      'super-values' => [
        'class' => \modules\supervalues\SuperValues::class,
        'components' => [
            'value' => [
                'class' => 'modules\supervalues\services\Value',
            ],
        ],
      ],
    ],
    'bootstrap' => [
      'contactformmodule',
      'super-api',
      'super-search',
      'super-values'
    ],
];
