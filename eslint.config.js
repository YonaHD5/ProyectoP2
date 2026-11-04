import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['coverage/', 'node_modules/'] },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: { globals: { ...globals.node } },
    rules: {
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'prefer-const': 'error',
      'no-console': 'warn',
      'curly': ['error', 'all']
    }
  }
];