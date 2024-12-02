import config from '../eslint.config.js';

export default [
  ...config,

  {
    files: ['*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'Web',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'web',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['*.html'],
    rules: {},
  },
  {
    // ignores: ['index.html'],
  },
];
