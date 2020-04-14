module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    // 有使用minimizer移除console, debugger (mode: production)
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        tabWidth: 4
      }
    ]
    // indent: ['error', 2],
    // semi: 'off',
    // eqeqeq: 'off',
    // quotes: 'off',
    // 'no-unused-vars': 'warn'
  },
  parserOptions: {},
  plugins: [
    // html
    'prettier',
    "pug"
  ]
};
