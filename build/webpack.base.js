const webpack = require("webpack");
const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", //入口
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [ require("autoprefixer") ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [ "style-loader", "css-loader", "less-loader", "postcss-loader" ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 5000,
              // 分离图片至imgs文件夹
              name: "imgs/[name].[ext]"
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html")
    })
  ] // 插件
};
