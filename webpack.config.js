//path モジュールの読み込み
const path = require("path");

//MiniCssExtractPlugin の読み込み
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //エントリポイント
  entry: "./src/javascripts/index.js",
  //出力先
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // testで対象となるファイルを検知するとuseが実行される
        // useは下から上(後ろから)の順で処理される

        test: /\.scss$/,
        // Sassファイルの読み込みとコンパイル
        use: [
          // CSSファイルを抽出するように MiniCssExtractPlugin のローダーを指定
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSをバンドルするためのローダー
          {
            loader: "css-loader",
            options: {
              //URL の解決を無効に
              url: false,
              // ソースマップを有効に
              sourceMap: true,
            },
          },
          // Sass を CSS へ変換するローダー
          {
            loader: "sass-loader",
            options: {
              // ソースマップを有効に
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  // jsファイルで絶対パスを有効にするための記述
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
  plugins: [
    // MiniCssExtractPluginの設定
    new MiniCssExtractPlugin({
      // 抽出する CSS のファイル名
      filename: "main.css",
    }),
  ],
};
