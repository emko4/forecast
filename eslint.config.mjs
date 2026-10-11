import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

// The project was written under Airbnb's rule set, which does not exist for
// the current ESLint. In its place stand ESLint's own recommended rules,
// React's and the accessibility plugin's — and, line for line, every rule the
// project itself had set.
export default [
    { ignores: ['site/', 'node_modules/', 'src/services/translations/intl/'] },
    js.configs.recommended,
    react.configs.flat.recommended,
    jsxA11y.flatConfigs.recommended,
    {
        files: ['src/**/*.{js,jsx}', 'vite/**/*.js', 'vite.config.js'],
        languageOptions: {
            // The source decorates its classes (@connect, @withRouter …).
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react'],
                    plugins: [['@babel/plugin-proposal-decorators', { version: 'legacy' }]],
                },
            },
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.mocha,
                // filled in by the build
                DEBUG: 'readonly',
                process: 'readonly',
            },
        },
        // Comments that switch off one of Airbnb's rules are left where they are.
        linterOptions: { reportUnusedDisableDirectives: 'off' },
        plugins: { import: importPlugin },
        settings: { react: { version: 'detect' } },
        rules: {
            // The code was written for React 16.5; one lifecycle method it uses
            // has been renamed since. Said, not enforced.
            'react/no-deprecated': 'warn',

            // eslint rules (template)
            'strict': ['error', 'global'],
            'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'caughtErrors': 'none' }],
            'no-console': ['error'],
            'camelcase': ['error', { 'properties': 'always' }],
            'consistent-return': 'error',
            'arrow-spacing': 'error',
            'arrow-parens': ['error', 'always'],
            'arrow-body-style': ['error', 'as-needed'],
            'semi': ['error', 'always'],
            'no-confusing-arrow': ['error', { 'allowParens': false }],
            'no-constant-condition': 'error',
            'no-labels': 'error',
            'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
            'func-names': ['warn', 'always', { 'generators': 'never' }],
            'func-style': 'off',
            'object-curly-newline': 'off',
            'function-paren-newline': 'off',
            'prefer-destructuring': 'off',

            // eslint rules
            'no-underscore-dangle': ['error', { 'allowAfterThis': true }],
            'comma-dangle': ['error', 'always-multiline'],
            'max-len': ['error', 150],
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'no-return-assign': 'off',
            'padded-blocks': ['error', { 'classes': 'always', 'blocks': 'never', 'switches': 'never' }],
            'class-methods-use-this': 'off',

            // import plugin rules
            'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],

            // react plugin rules (template)
            'react/forbid-prop-types': ['error', { 'forbid': ['any'] }],
            'react/jsx-boolean-value': 'warn',
            'react/jsx-closing-bracket-location': 'off',
            'react/jsx-curly-brace-presence': 'off',
            'react/jsx-curly-spacing': 'warn',
            'react/jsx-indent-props': ['error', 4],
            'react/jsx-key': 'warn',
            'react/jsx-max-props-per-line': 'off',
            'react/jsx-no-bind': 'off',
            'react/jsx-no-literals': 'off',
            'react/jsx-pascal-case': 'warn',
            'react/jsx-sort-props': 'off',
            'react/jsx-filename-extension': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/no-multi-comp': 'warn',
            'react/no-set-state': 'off',
            'react/no-array-index-key': 'off',
            'react/self-closing-comp': 'warn',
            'react/sort-comp': 'warn',
            'react/require-default-props': 'off',

            // react plugin rules
            'react/jsx-indent': ['error', 4],
            'react/prefer-es6-class': 'error',
            'react/sort-prop-types': 'warn',
            'react/static-property-placement': 'off',
            'react/prefer-stateless-function': 'off',

            // jsx-a11y plugin rules
            'jsx-a11y/no-static-element-interactions': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/anchor-is-valid': ['warn', { 'aspects': ['invalidHref'] }],
            'jsx-a11y/label-has-for': ['error', { 'required': { 'every': ['id'] }}],
        },
    },
    {
        files: ['vite/**/*.js', 'vite.config.js'],
        languageOptions: { globals: { ...globals.node } },
    },
];
