import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'node_modules/',
    'pnpm-lock.yaml',
    // ...globs
  ],
  formatters: true,
  vue: {
    a11y: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  stylistic: {
    overrides: {
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
}, {
  files: ['**/*.ts'],
  rules: {
    'ts/no-unsafe-argument': 'off',
  },
})
