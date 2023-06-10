module.exports = {
  root         : true,
  extends      : ['plugin:vue/vue3-recommended', '@vue/typescript/recommended'],
  parserOptions: {
    sourceType : 'module',
    ecmaVersion: 2021,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    curly         : ['error', 'multi-line'],
    'comma-dangle': ['error', 'always-multiline'],
    'key-spacing' : [
      'error',
      {
        align: 'colon',
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        exceptions: { VariableDeclarator: true },
      },
    ],
    'no-floating-decimal'           : 'off',
    'space-before-function-paren'   : ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/component-tags-order'      : [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    
  },
}
