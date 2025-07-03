import globals from 'globals'
import js from '@eslint/js'
// import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.node },
      ecmaVersion: 'latest',
    },
  },
  {
    ignores: ["webpack.config.js", "node_modules/*", "dist/*", "cypress/*", "cypress.config.js"],
  },
]