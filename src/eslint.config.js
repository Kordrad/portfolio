import angular from 'angular-eslint';
import tsEslint from 'typescript-eslint';

import config from '../eslint.config.js';

export default tsEslint.config(
  config,
  {
    files: ['**/*.ts'],
    extends: [...tsEslint.configs.recommended, ...tsEslint.configs.stylistic, ...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'App',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  },
  {
    files: ['**/*.html', '*.{component,page}.ts'],
    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': ['error'],
    },
  }
);
