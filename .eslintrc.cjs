module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  ignorePatterns: ['strings.js'],
  rules: {
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'no-debugger': 'warn',
    '@typescript-eslint/comma-dangle': ['warn', 'only-multiline'],
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 110 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      1,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'no-param-reassign': ['error', { props: false }],
  },
  overrides: [
    {
      files: ['*.test.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'only-multiline',
            enums: 'only-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
          },
        ],
        'class-methods-use-this': ['off'],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              'src/components/ScreenSaver.tsx',
              'src/components/RotatingText.tsx',
              '**/__tests__/**/*',
            ],
          },
        ],
        'react/no-unknown-property': ['off'],
      },
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript', 'plugin:prettier/recommended', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        parser: '@typescript-eslint/parser',
      },
    },
  ],
};
