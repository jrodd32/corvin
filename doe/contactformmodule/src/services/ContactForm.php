<?php
/**
 * ContactForm module for Craft CMS 3.x
 *
 * Basic contact form for corvin.
 *
 * @link      https://doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\contactformmodule\services;

use modules\contactformmodule\ContactFormModule;
use modules\contactformmodule\models\ZeoContactForm as ContactModel;

use Craft;
use craft\base\Component;
use Mailgun\Mailgun;

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
        // if (!array_key_exists('hp', $params) && strlen($params['hp']) > 0) {
        //     return false;
        // }

        $contactModel = new ContactModel(['scenario' => 'contact-form-submission']);
        $contactModel->attributes = $params;

        $errors = $this->validateData($contactModel);

        if (!empty($errors)) {
            return [
                'status' => 'failed',
                'data' => $errors,
            ];
        }

        // TODO: change pre-launch
        $to = "jrodd32@gmail.com";
        $subject = "Inquiry from the website";

        $body = "First name: {$contactModel->first_name} \n\n";
        $body .= "Last name: {$contactModel->last_name} \n\n";
        $body .= "Email: {$contactModel->email} \n\n";

        $from = "{$contactModel->first_name} {$contactModel->last_name} <{$contactModel->email}>";

        if (strlen($contactModel->phone) > 0) {
          $body .= "Phone: {$contactModel->phone} \n\n";
        }

        $body .= "Message: \n\n {$contactModel->message} \n\n";


        $mgClient = new Mailgun(getenv('MAILGUN_API_KEY'));
        $domain = getenv('MAILGUN_DOMAIN');
        # Make the call to the client.
        $result = $mgClient->sendMessage($domain, array(
            'from'	=> $from,
            'to'	=> $to,
            'subject' => $subject,
            'text'	=> $body
        ));

        if ($result->http_response_code === 200) {
            return [
              'status' => 'success'
           ];
        }

        return [
            'status' => 'failed'
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
