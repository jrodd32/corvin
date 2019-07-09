<?php

  return [
    'imageStyles' => [
      'half' => [
        'aspectRatio' => 4/3,
        'widths' => [
          2000,
          1200,
        ],
        'breakpoints' => [
          601,
          null
        ]
      ],

      'landscape' => [
        'aspectRatio' => 9/5,
        'widths' => [
          2700,
          1800,
          900,
        ],
        'breakpoints' => [
          900,
          451,
          null
        ]
      ],

      'nav' => [
        'aspectRatio' => 5/3,
        'widths' => [
          640
        ],
        'breakpoints' => [
          null
        ]
      ],

      'portrait' => [
        'aspectRatio' => 3/4,
        'widths' => [
          1200
        ],
        'breakpoints' => [
          1008
        ]
      ],

      'square' => [
        'aspectRatio' => 1/1,
        'widths' => [
          1300,
          800
        ],
        'breakpoints' => [
          401,
          null
        ]
      ],

      'timeline' => [
        'aspectRatio' => 16/9,
        'widths' => [
          1200,
          800
        ],
        'breakpoints' => [
          1008,
          null
        ]
      ],

      'default' => []
    ]
  ];
