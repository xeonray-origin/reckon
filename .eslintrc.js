module.exports = {
  extends: ['next/core-web-vitals', 'prettier', 'next'],
  plugins: ['prettier'],
  globals: {
    React: 'readonly',
  },
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['types.ts', './src/types/*'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    '@next/next/no-document-import-in-page': 'off',
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'max-len': ['warn', { code: 80, ignoreUrls: true }],
    'jsx-a11y/alt-text': 'off',
    'no-unused-vars': 'warn',
    eqeqeq: 'warn',
    'import/no-anonymous-default-export': 'off',
  },
};
