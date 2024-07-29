/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'es5',
    semi: true,
    singleQuote: true,
    experimentalTernaries: true,
    bracketSameLine: true,
    jsxSingleQuote: true,
    tabWidth: 4,
    arrowParens: 'avoid',
    plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
