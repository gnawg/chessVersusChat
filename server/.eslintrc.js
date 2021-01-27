module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": [1, { argsIgnorePattern: "^(next|_)$" }], // disallow unused variables
  },
};
