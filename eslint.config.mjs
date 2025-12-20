import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';
import promise from 'eslint-plugin-promise';
import sonarjs from 'eslint-plugin-sonarjs';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // --------------------------------------------------
  // Base Next.js configs
  // --------------------------------------------------
  ...nextVitals,
  ...nextTs,

  // --------------------------------------------------
  // Override default ignores
  // --------------------------------------------------
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),

  // --------------------------------------------------
  // Global strict correctness (client + server)
  // --------------------------------------------------
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      parserOptions: {
        project: true,
      },
    },

    plugins: {
      import: importPlugin,
      sonarjs,
      'unused-imports': unusedImports,
      promise,
      '@typescript-eslint': tseslint.plugin,
    },

    rules: {
      // =====================================================
      // BASE BUG PREVENTION
      // =====================================================
      'no-var': 'error',
      'no-empty': 'error',
      'no-empty-function': 'warn',
      'dot-notation': 'error',
      'semi-style': 'warn',
      'no-process-env': 'error',
      eqeqeq: ['error', 'always'],
      'no-debugger': 'error',
      'no-fallthrough': 'error',
      'no-implicit-coercion': 'error',

      // =====================================================
      // REACT
      // =====================================================
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // =====================================================
      // HOOK SAFETY
      // =====================================================
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // =====================================================
      // UNSAFE TS PATTERNS
      // =====================================================
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      'promise/catch-or-return': 'error',

      // =====================================================
      // ACCIDENTAL COMPLEXITY
      // =====================================================
      'sonarjs/cognitive-complexity': ['warn', 15],
      'sonarjs/no-identical-functions': 'warn',
      'sonarjs/no-duplicate-string': 'warn',

      'max-depth': ['warn', 4],
      complexity: ['warn', 10],

      // =====================================================
      // IMPORT HYGIENE
      // =====================================================
      'import/no-cycle': 'error',
      'import/no-self-import': 'error',
      'import/no-duplicates': 'error',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // =====================================================
      // ACCESSIBILITY
      // =====================================================
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
    },
  },

  // --------------------------------------------------
  // SERVER COMPONENT SAFETY (RSC)
  // --------------------------------------------------
  {
    files: ['app/**/*.{ts,tsx}'],
    ignores: ['**/*.client.ts', '**/*.client.tsx'],
    rules: {
      'no-restricted-globals': [
        'error',
        { name: 'window', message: '❌ window is client-only' },
        { name: 'document', message: '❌ document is client-only' },
        { name: 'localStorage', message: '❌ localStorage is client-only' },
      ],
    },
  },
]);
