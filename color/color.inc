<?php

/**
 * @file
 * Lists available colors and color schemes for the Scroll theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'fixed' => t('Fixed region'),
    'scroll' => t('Scroll region'),
    'header' => t('Header background'),
    'footer' => t('Footer background'),
    'bg' => t('Main background'),
    'scroll_1' => t('Scroll 1 - Top region background'),
    'scroll_2' => t('Scroll 2 background'),
    'scroll_3' => t('Scroll 3 background'),
    'scroll_4' => t('Scroll 4 background'),
    'scroll_5' => t('Scroll 5 - Bottom background'),
  ],
  
  'schemes' => [
    'default' => [
      'title' => t('Default Scroll Theme)'),
      'colors' => [
        'fixed' => '#055a8e',
        'scroll' => '#027a8e',
        'header' => '#1d84c3',
        'footer' => '#fefefe',
        'bg' => '#ffffff',
        'scroll_1' => '#f6f6f2',
        'scroll_2' => '#f9f9f9',
        'scroll_3' => '#292929',
        'scroll_4' => '#fffeff',
        'scroll_5' => '#3b3b3b',
      ],
    ],
  ],
  'css' => [
    'css/colors.css',
  ],
  'copy' => [
    'logo.svg',
  ],
];
