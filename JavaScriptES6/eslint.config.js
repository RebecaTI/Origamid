import globals from 'globals'

import js from '@eslint/js'

import prettier from 'eslint-plugin-prettier'

/** @type{import('eslint').Linter.Config[]} */
const config = [
  {
    files: ['**/*.js'],
    ignores: ['node_modules'],
    plugins: {
      prettier
    },
    languageOptions: {
      globals: {
        ...globals.es2017,
        ...globals.browser
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettier.configs.recommended.rules
    }
  }
]

export default config
