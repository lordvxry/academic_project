module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:i18next/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        'react',
        'i18next',
        'react-hooks'
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        '@typescript-eslint/indent': [2, 4],
        indent: [2, 4],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        semi: ['error', 'always'],
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to']
            }],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ]
};
