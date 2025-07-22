import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'node_modules/',
    'pnpm-lock.yaml',
  ],
  formatters: true,
  vue: {
    overrides: {
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
    },
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
