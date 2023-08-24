module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": ["error", 2], // Enforce 2-space indentation
    "semi": ["error", "always"], // Require semicolons
    "quotes": ["error", "single"], // Use single quotes for strings
    "no-var": "error", // Disallow using 'var'
    "space-infix-ops": "error", // Require spacing around operators
    "no-unused-vars": "warn", // Warn about unused variables
    "arrow-spacing": "error", // Enforce consistent spacing in arrow functions
    "curly": ["error", "multi-line"], // Require curly braces for multiline control statements
    "comma-dangle": ["error", "always-multiline"], // Require trailing commas in multiline structures
    "max-len": ["error", { "code": 120 }], // Limit line length to 80 characters
    "no-console": "warn", // Warn about using console methods
    "no-alert": "error", // Disallow using 'alert'
    "no-eval": "error", // Disallow using 'eval'
    "object-curly-spacing": ["error", "always"],
  },
}
