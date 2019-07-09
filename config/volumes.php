<?php

return [
    'uploads' => [
        'hasUrls' => true,
        'url' => getenv('SPACES_URL'),
        'keyId' => getenv('SPACES_API_KEY'),
        'secret' => getenv('SPACES_SECRET'),
        'endpoint' => getenv('SPACES_ENDPOINT'),
        'region' => getenv('SPACES_REGION'),
        'bucket' => getenv('SPACES_BUCKET'),
    ],
];