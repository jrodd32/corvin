<?php
/**
 * ContactForm module for Craft CMS 3.x
 *
 * Basic contact form for Zeochem.
 *
 * @link      https://doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\contactformmodule\services;

use modules\contactformmodule\ContactFormModule;
use modules\contactformmodule\models\ZeoContactForm as ContactModel;

use Craft;
use craft\base\Component;
use craft\mail\Message;

/**
 * ContactForm Service
 *
 * All of your module’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other modules can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author    Doe-Anderson
 * @package   ContactFormModule
 * @since     1.0.0
 */
class ContactForm extends Component
{

    // Public Methods
    // =========================================================================

    public function handleContactForm($params)
    {
        if (strlen($params['hp']) > 0) {
            return false;
        }

        $scenario = 'contact-form-submission';

        if (array_key_exists('requireFile', $params)) {
            $scenario = 'file-form-submission';
        }

        $contactModel = new ContactModel(['scenario' => $scenario]);
        $contactModel->attributes = $params;

        $errors = $this->validateData($contactModel);

        if (!empty($errors)) {
            return [
                'status' => 'failed',
                'data' => $errors,
            ];
        }

        $application = '';

        if (CRAFT_ENVIRONMENT === 'production') {
          switch($contactModel->application) {
              case 'p1':
                  $to = "gernot.feldbacher@zeochem.com";
                  $application = "Chemicals & Energy";
              break;

              case 'p2':
                  $to = "matteo.caravati@zeochem.com";
                  $application = "Industrial Gas";
              break;

              case 'p3':
                  $to = "lwarne@zeochem.com";
                  $application = "Medical Oxygen";
              break;

              case 'p4':
                  $to = "gabriele.fenoggio@zeochem.com";
                  $application = "Technical Desiccants";
              break;

              case 'p5':
                  $to = "Baumann.rolf@zeochem.com";
                  $application = "Chromatography Gels";
              break;

              case 'p6':
                  $to = "info@zeochem.ch";
                  $application = "Sonstiges resp. Other";
              break;

              default:
                $application = '';
              break;
          }
        }

        $to = "digital@doeanderson.com";

        $subject = "{$application} inquiry from the website";

        $body = "Name: {$contactModel->name} \n\n";

        if (strlen($contactModel->phone) > 0) {
          $body .= "Phone: {$contactModel->phone} \n\n";
        }

        $body .= "Email: {$contactModel->email} \n\n";

        if (strlen($application) > 0) {
          $body .= "Application: {$application} \n\n";
        }

        if (strlen($contactModel->country) > 0) {
          $body .= "Country: {$contactModel->country} \n\n";
        }

        $body .= "Message: \n\n".$contactModel->message;

        $emailMessage = new Message();
        $emailMessage->setFrom([$contactModel->email => $contactModel->name]);
        $emailMessage->setTo($to);
        $emailMessage->setSubject($subject);
        $emailMessage->setTextBody($body);

        if ($contactModel->file) {
          $emailMessage->attach($contactModel->file->tempName, [
            'fileName' => $contactModel->file->name
          ]);
        }

        Craft::$app->mailer->send($emailMessage);

        return [
          'status' => 'success'
       ];
    }

    // Protected Methods
    // =========================================================================

    protected function validateData($data)
    {
        $errors = [];

        if (!$data->validate()) {
            foreach($data->getErrors() as $errorKey => $errorValue) {
                $errors[$errorKey] = $errorValue;
            }
        }

        return $errors;
    }
}
