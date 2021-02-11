const path = require("path");
const glob = require("glob");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

const generalStyles = path.resolve(__dirname, "src/style/index.css");
const componentsEntry = glob
  .sync(path.resolve(__dirname, "src/components/[A-Z]*/index.css"))
  .concat(generalStyles)
  .map((item) => [
    item
      .replace(new RegExp(`^${__dirname}/src/`), "")
      .replace(/\/index.css$/, ""),
    item,
  ])
  .reduce(
    (result, [componentName, componentPath]) => ({
      ...result,
      [`${componentName}/index`]: componentPath,
    }),
    {}
  );

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ExtractCssChunks.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin({ extensions: ["css"] }),
    new ExtractCssChunks(),
  ],
  entry: componentsEntry,
  output: { path: path.resolve("lib") },
};
