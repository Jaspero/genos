import tseslint from 'typescript-eslint';

export default tseslint.config({
  plugins: {
    '@typescript-eslint': tseslint.plugin
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname
    }
  },
  files: ['**/*.ts'],
  ignores: ['/lib/**/*'],
  rules: {
    quotes: ['error', 'single'],
    'import/no-unresolved': 0,
    indent: ['error', 2],
    'require-jsdoc': 0,
    'max-len': ['warn', 100],
    'no-empty': 'warn',
    '@typescript-eslint/no-explicit-any': 'off'
  }
});
