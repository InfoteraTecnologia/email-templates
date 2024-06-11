/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
  experimentalTernaries: true,
  bracketSameLine: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
