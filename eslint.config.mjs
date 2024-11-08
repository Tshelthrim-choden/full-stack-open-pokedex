import globals from 'globals';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType:  "module",
      parser: "@babel/eslint-parser",
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest",
    },
  },
]
