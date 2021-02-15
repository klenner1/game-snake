const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require("sass-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require('fs');

module.exports = {
  entry: {
    main: "./src/main.ts",
    sw: "./src/service-worker.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["css-loader", "style-loader"],
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/Assets/", to: "assets" },
        { from: "src/manifest.json" },
        { from: "src/favicon.ico" },
      ],
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    https: true,
    key: fs.readFileSync('./path/server.key'),
    cert: fs.readFileSync('./path/server.crt'),
    //ca: fs.readFileSync('./path/ca.pem'),
  }
};
