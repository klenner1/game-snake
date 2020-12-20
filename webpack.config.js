const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require("sass-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
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
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
