import js from '@eslint/js';
import globals from 'globals';
import cypress from 'eslint-plugin-cypress';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['node_modules', 'dist', 'cypress/screenshots', 'cypress/videos'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.node, // Menambahkan Node.js globals
      },
    },
    rules: {
      // General ESLint Rules
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],

      // Best Practices
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'warn',
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'spaced-comment': ['error', 'always'],

      // Cypress Specific
      'cypress/no-force': 'off',
    },
  },
  {
    files: ['cypress/**/*.js'],
    plugins: { cypress },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Node.js globals untuk file Cypress
        ...globals.mocha,
        Cypress: 'readonly',
        cy: 'readonly',
      },
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'warn',
    },
  },
]);
