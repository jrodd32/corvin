<?php
/**
 * ContactForm module for Craft CMS 3.x
 *
 * Basic contact form for Zeochem.
 *
 * @link      https://doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\contactformmodule\controllers;

use Craft;
use craft\helpers\Json;

use craft\web\Controller;
use craft\web\UploadedFile;
use modules\contactformmodule\ContactFormModule;
use modules\contactformmodule\services\ContactForm as ContactService;

/**
 * ContactForm Controller
 *
 * Generally speaking, controllers are the middlemen between the front end of
 * the CP/website and your module’s services. They contain action methods which
 * handle individual tasks.
 *
 * A common pattern used throughout Craft involves a controller action gathering
 * post data, saving it on a model, passing the model off to a service, and then
 * responding to the request appropriately depending on the service method’s response.
 *
 * Action methods begin with the prefix “action”, followed by a description of what
 * the method does (for example, actionSaveIngredient()).
 *
 * https://craftcms.com/docs/plugins/controllers
 *
 * @author    Doe-Anderson
 * @package   ContactFormModule
 * @since     1.0.0
 */
class ContactFormController extends Controller
{

    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = [
      'contact-form'
    ];

    protected $payload;
    protected $contactService;

    // Public Methods
    // =========================================================================
    public function behaviors()
    {
      $behaviors = parent::behaviors();

      // add CORS filter
      $behaviors['corsFilter'] = [
          'class' => \yii\filters\Cors::className(),
          'cors' => [
            'Origin' => [
              'http://localhost:8080',
              'http://localhost:8000',
              'https://zeochem.doe1915.com',
              'https://www.zeochem.com',
              'https://www.zeochem.ch',
            ],
            'Access-Control-Request-Method' => [
              'POST'
            ],
            'Access-Control-Request-Headers' => [
              'X-Requested-With',
              'X-CSRF-TOKEN'
            ]
          ]
      ];

      return $behaviors;
    }

    public function beforeAction($action)
    {
        $this->contactService = new ContactService();

        if (!parent::beforeAction($action)) {
            return false;
        }

        $this->requirePostRequest();
        $this->requireAcceptsJson();

        $this->payload = Craft::$app->request->post();
        $this->payload['file'] = UploadedFile::getInstanceByName('file');

        return true;
    }

    /**
     * Handle a request going to our module's index action URL,
     * e.g.: actions/contact-form-module/contact-form
     *
     * @return mixed
     */
    public function actionContactForm()
    {
        // Setup and send email
        $response = $this->contactService->handleContactForm($this->payload);

        if ($response['status'] === 'failed') {
          return $this->asJson([
              'success' => false,
              'message' => 'Sending your message failed. Please try again.',
              'errors' => $response['data']
          ]);
      }

      return $this->asJson([
          'success' => true,
          'message' => 'Your message has been sent.'
      ]);
    }
}
