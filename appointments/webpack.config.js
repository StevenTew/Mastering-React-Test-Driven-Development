const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  module: {
    rules: [{
      test: /\.(jsjsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};