
module.exports = {
  rules: {
    'indent': [2, 2],
    'quotes': [2, 'single'],
    'linebreak-style': [2, 'unix'],
    'semi': [2, 'always'],
    'comma-dangle': [1, 'always-multiline'],
    'dot-location': [1, 'property'],
    'no-unused-vars': [2, {
      'vars': 'all', 'varsIgnorePattern': '^u_',
      'args': 'all', 'argsIgnorePattern': '^u_',
    }],
    'eqeqeq': 2,
    'no-else-return': 2,
    'no-multi-spaces': 2,
    'no-new': 2,
    'no-console': 0,
  },

  env: {
    'browser': true,
    'node': true,
  },

  'extends': 'eslint:recommended',
};
