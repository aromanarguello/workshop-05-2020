const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: 'production',
  entry: "./src/index.js", // relative path to our entry file, webpack will pick up this by default
  output: {
    path: path.join(__dirname, "dist"), // __dirname provides the root of the directory
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //which patterns these rules apply to
        loader: "babel-loader", // specify loader
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
