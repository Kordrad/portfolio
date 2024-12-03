const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const unusedImports = require('eslint-plugin-unused-imports');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');

const nxPlugin = require('@nx/eslint');
const angular = require('angular-eslint');

const unusedImportsConfig = [
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];

const simpleImportSortConfig = [
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
];

const eslintPluginPrettierConfig = [
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
];

const eslintPluginUnicornConfig = [
  {
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/prefer-string-replace-all': 'off',
    },
  },
];

const angularConfig = [
  ...angular.configs.tsRecommended,
  ...angular.configs.templateRecommended,
  ...angular.configs.templateAccessibility,
  {
    files: ['**/*.ts'],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
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
    files: ['**/*.html', '*.{component,page}.ts'],
    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': ['error'],
    },
  },
];

module.exports = [
  { plugins: { '@nx': nxPlugin } },

  ...unusedImportsConfig,
  ...simpleImportSortConfig,
  ...eslintPluginPrettierConfig,
  ...eslintPluginUnicornConfig,
  ...angularConfig,
  {
    ignores: [
      '**/!.vscode/extensions.json',
      '**/!.vscode/launch.json',
      '**/!.vscode/settings.json',
      '**/!.vscode/tasks.json',
      '**/*.launch',
      '**/*.sublime-workspace',
      '**/.DS_Store',
      '**/.angular/cache',
      '**/.c9/',
      '**/.classpath',
      '**/.history/*',
      '**/.idea',
      '**/.nx',
      '**/.project',
      '**/.sass-cache/',
      '**/.settings/',
      '**/.vscode/*',
      '**/Thumbs.db',
      '**/bazel-out',
      '**/connect.lock',
      '**/coverage',
      '**/dist',
      '**/libpeerconnection.log',
      '**/node_modules',
      '**/npm-debug.log',
      '**/out-tsc',
      '**/testem.log',
      '**/tmp',
      '**/typings',
      '**/yarn-error.log',
      '**/pnpm-lock.yaml',
      '**/*timestamp*',
    ],
  },
];
