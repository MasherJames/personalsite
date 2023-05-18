module.exports = {
    extends: ['next/core-web-vitals', '../.eslintrc.json'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
};
