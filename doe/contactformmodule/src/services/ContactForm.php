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

        $to = "digital@doeanderson.com";
        $subject = "Inquiry from the website";
        $application = '';

        if (CRAFT_ENVIRONMENT === 'production') {
            $to = $this->sendTo($params['path'], $contactModel->country);
        }

        $body = "Name: {$contactModel->name} \n\n";

        if (strlen($contactModel->phone) > 0) {
          $body .= "Phone: {$contactModel->phone} \n\n";
        }

        $body .= "Email: {$contactModel->email} \n\n";

        if (strlen($application) > 0) {
          $subject = "{$application} inquiry from the website";
          $body .= "Application: {$application} \n\n";
        }

        if (strlen($contactModel->country) > 0) {
          $body .= "Country: {$contactModel->country} \n\n";
        }

        $body .= "Message: \n\n {$contactModel->message} \n\n";

        $body .= "Contacted from URL: https://www.corvin.com{$params['path']}";

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

    protected function sendTo($path, $country)
    {
        $paths = [
            'ce' => [
                '/our-applications/petrochemicals',
                '/our-applications/refining',
                '/our-applications/solvent-drying-and-treating',
                '/our-applications/ammonia-syngas',
                '/our-applications/natural-gas-processing-liquefied-natural-gas-lng',
                '/technical-support',
            ],
            'deu.cge' => [
                '/our-products/deuterium-labeled-compounds',
                '/our-products/chromatography-gels',
                '/our-applications/analytical',
                '/our-applications/natural-products',
                '/our-applications/pharmaceuticals',
                '/our-applications/health-science-diagnostics',
                '/our-applications/food-and-beverages',
                '/our-applications/biopharmaceuticals',
            ],
            'hr' => [
                '/careers',
                '/management-team',
            ],
            'info' => [
                '/',
                '/our-products',
                '/our-applications',
                '/our-locations',
                '/why-corvin',
                '/quality-systems',
                '/environmental',
                '/news',
                '/history',
                '/privacy-policy',
                '/terms-conditions',
                '/downloads',
                '/our-products/molecular-sieves',
                '/research-and-development',
            ],
            'sz.ted' => [
                '/our-products/specialty-zeolites',
                '/our-applications/coatings-adhesives-sealants-and-elastomers-case-industry',
                '/our-applications/environmental',
                '/our-applications/chemical',
                '/our-applications/industrial-drying',
            ],
            'tg' => [
                '/our-applications/psa-hydrogen-purification',
                '/our-applications/molecular-sieve-regeneration-services',
                '/our-applications/ethanol-dehydration',
                '/our-applications/industrial-oxygen-generation',
                '/our-applications/medical-oxygen-generation',
            ]
        ];

        $dotChCountries = [
            'Europe',
            'Middle East',
            'China',
            'Asia-Pacific',
            'Russia',
            'Other',
        ];

        if (in_array($path, $paths['ce'])) {
            return 'CE@corvin.com';
        }

        if (in_array($path, $paths['deu.cge'])) {
            return 'DEU.CGE@corvin.com';
        }

        if (in_array($path, $paths['hr'])) {
            return 'HR@corvin.com';
        }

        if (in_array($path, $paths['sz.ted'])) {
            return 'SZ.TED@corvin.com';
        }

        if (in_array($path, $paths['tg'])) {
            return 'TG@corvin.com';
        }

        if (in_array($path, $paths['info']) && in_array($country, $dotChCountries)) {
            return 'info@corvin.ch';
        }

        return 'info@corvin.com';
    }
}
