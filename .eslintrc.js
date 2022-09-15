module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'airbnb', 'prettier', 'plugin:@typescript-eslint/recommended'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  globals: {
    DEV_SERVER: true,
    API_DOMAIN: true,
  },
  plugins: ['json', 'prettier', 'import', '@typescript-eslint', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true,
        ignoreRestArgs: false,
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 0,

    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    'react/self-closing-comp': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': ['error', { arrow: true, return: true, declaration: true }],
    'react/button-has-type': 0,
    'react/no-multi-comp': 0,
    'react/state-in-constructor': 0,

    'prettier/prettier': ['error'],

    'newline-before-return': 'error',
    'prefer-arrow-callback': 'off',
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'require-await': 'error',
    'consistent-return': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'spaced-comment': ['error', 'always'],
    'no-underscore-dangle': 0,
    'no-use-before-define': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 1,
    'no-plusplus': 0,
    'class-methods-use-this': 0,
    'array-callback-return': 0,
    'default-case': 0,
    'func-names': 0,
    'no-useless-escape': 0,
    'prefer-promise-reject-errors': 0,
    'prefer-destructuring': 0,
    'no-restricted-syntax': 0,
    'arrow-body-style': 0,

    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,

    'import/no-named-as-default': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: ['./tsconfig.json'],
      },
    },
  },
};
