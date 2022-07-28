module.exports = {
  root: true,
  extends: '@callstack',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'react-native/no-raw-text': 0,
  },
  overrides: [
    {
      files: ['*.config.{js,mjs,cjs}'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
