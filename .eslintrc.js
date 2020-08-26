module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'prettier', 'prettier/vue', 'plugin:jest/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    'process': 'readonly'
  },
  ignorePatterns: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 'off',
    'no-empty': 'off',
    'no-case-declarations': 'off',
    'no-prototype-builtins': 'off'
  },
}
