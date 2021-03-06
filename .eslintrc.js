module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  rules: {
    indent: [2, 2],
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'quote-props': [2, 'as-needed'],
  },
  "parserOptions": {
    "ecmaVersion": 2017
  }
};
