const path = require("path");
require("dotenv").config();

module.exports = {
  entry: "./client/index.js",
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"],
          },
        },
      },
    ],
  },
};
