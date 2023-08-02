/* eslint-env node */

module.exports = {
    root: true,
    extends: ['site', 'plugin:storybook/recommended'],
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'error',
            {
                allowConstantExport: true,
            },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@next/next/no-img-element': 'off',
    },
};
