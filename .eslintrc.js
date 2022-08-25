module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function'] },
    ],
    'no-param-reassign': 'off',
    'react/button-has-type': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'jsx-a11y/media-has-caption': [
      2,
      {
        audio: ['Audio'],
        video: ['Video'],
        track: ['Track'],
      },
    ],
  },
};
