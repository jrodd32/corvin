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
    public $first_name;
    public $last_name;
    public $phone;
    public $email;
    public $message;
    public $hp;

    protected $requiredFields = [
      'first_name',
      'last_name',
      'email',
      'message'
    ];

    protected $allFields = [
      'first_name',
      'last_name',
      'email',
      'message',
      'phone',
      'hp',
    ];

    public function scenarios()
    {
      // which fields to validate and mass assign.
      // when you add a ! in front of the field name, that field will NOT be mass assigned or validated
      $scenarios = parent::scenarios();
      $scenarios['contact-form-submission'] = $this->allFields;
      return $scenarios;
    }

    public function rules()
    {
      return [
        [$this->requiredFields, 'required'],
        ['email', 'email', 'skipOnEmpty' => false, 'skipOnError' => false, 'message' => 'Email must be a valid format'],
      ];
    }
}