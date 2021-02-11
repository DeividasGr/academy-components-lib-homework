module.exports = {
  presets: [
    ["@babel/preset-env", { modules: "commonjs" }],
    [
      "@babel/preset-react",
      {
        flow: false,
        typescript: false,
      },
    ],
  ],
  plugins: [],
};
