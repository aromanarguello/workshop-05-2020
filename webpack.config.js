const path = require("path");

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
        test: /\.js$/, //which patterns these rules apply to
        loader: "babel-loader", // specify loader
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};
