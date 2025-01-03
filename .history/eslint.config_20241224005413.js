import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'next'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:next/recommended',
  ],
  rules: {
    'react/no-unescaped-entities': 'off',
    'next/no-img-element': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
