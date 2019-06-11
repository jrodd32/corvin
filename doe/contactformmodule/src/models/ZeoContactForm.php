<?php
/**
 * contactform module for Craft CMS 3.x
 *
 * Module for handling Ambassador Program
 *
 * @link      https://www.doeanderson.com
 * @copyright Copyright (c) 2018 Doe-Anderson
 */

namespace modules\contactformmodule\models;

use Craft;
use craft\base\Model;

/**
 * Consumer Model
 *
 * Models are containers for data. Just about every time information is passed
 * between services, controllers, and templates in Craft, it’s passed via a model.
 *
 * https://craftcms.com/docs/plugins/models
 *
 * @author    Doe-Anderson
 * @package   contactform
 * @since     1.0.0
 */
class ZeoContactForm extends Model
{
    public $name;
    public $country;
    public $phone;
    public $email;
    public $application;
    public $message;
    public $file;

    protected $requiredFields = [
      'name',
      'email',
      'message'
    ];

    protected $allFields = [
      'name',
      'country',
      'phone',
      'email',
      'application',
      'message',
      'file'
    ];

    public function scenarios()
    {
      // which fields to validate and mass assign.
      // when you add a ! in front of the field name, that field will NOT be mass assigned or validated
      $scenarios = parent::scenarios();
      $scenarios['contact-form-submission'] = $this->allFields;
      $scenarios['file-form-submission'] = $this->allFields;
      return $scenarios;
    }

    public function rules()
    {
      return [
        [$this->requiredFields, 'required'],
        ['email', 'email', 'skipOnEmpty' => false, 'skipOnError' => false, 'message' => 'Email must be a valid format'],
        ['file', 'required', 'on' => 'file-form-submission'],
        ['file', 'file', 'extensions' => ['pdf', 'doc', 'docx'], 'on' => 'file-form-submission'],
      ];
    }
}