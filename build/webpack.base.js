const webpack = require("webpack");
const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", //入口
  resolve: {
    extensions: [ ".js", ".vue", "json" ],
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.(c|le)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "imgs/[name].[contenthash].[ext]"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [ 0.65, 0.9 ],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css",
      chunkFilename: "css/[id].[hash:8].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html")
    })
  ] // 插件
};
