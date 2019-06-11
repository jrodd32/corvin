<?php

namespace doeanderson\superimage\models;

use craft\base\Model;
use craft\validators\ArrayValidator;

class Settings extends Model
{
  // Public Properties
  // =========================================================================

  public $imageStyles = [];


  // Public Methods
  // =========================================================================

  public function rules()
  {
    return [
      [
        [
          'imageStyles',
        ],
        ArrayValidator::class,
      ],
    ];
  }
}
