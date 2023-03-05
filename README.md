# webpackTest2

---

## 実行環境

- windows10
- node v18.13.0

---

### **1. 作業ディレクトリに移動**

---

### **2. package.json の生成**

(-y コマンドは対話形式で質問される項目をすべてデフォルトで設定する)  
下記コマンドで package.json が生成される

```zsh
$ npm init -y
```

---

### **3. webpack モジュールをインストール**

webpack4.0 以降はコマンドライン操作用のパッケージは webpack-cli という別パッケージで提供されているので併せてインストールが必要  
インストールが完了すると node_modeles ディレクトリと、package-lock.json が生成されて、package.json の dependencies に webpack が記載される

```zsh
$ npm install webpack webpack-cli
```

---

### **4. 初期構成の作成**

初期構成として下記のようにフォルダ、ファイルを作成する

```
webpackTest
├── dist  //追加する(中身は空)
├── index.html  //追加する
├── node_modules
├── package-lock.json
├── package.json
└── src  //追加する
      └── javascripts  //追加する
      |     └── index.js //追加する
      └── styles  //追加する
            └── main.scss //追加する
```

index.html, index.js, main.scss にサンプル内容を記述

---

### **5. ローダーとプラグインのインストール**

以下のローダーとプラグインをインストールする

- css-loader：CSS を処理するためのモジュール
- sass-loader：Sass を CSS へ変換するためのモジュール
- sass：Sass をコンパイルするためのモジュール（Dart Sass）
- MiniCssExtractPlugin：CSS を別ファイルとして出力するためのプラグイン(dist に css ファイルを出力できる)

```zsh
$ npm install css-loader sass-loader sass mini-css-extract-plugin
```

---

### **6. webpack.config.js を作成**

内容を記述する  
ローダーの処理の大まかな流れ

- sass-loader を使って Sass を CSS へ変換
- css-loader で CSS を JavaScript（CommonJS） に変換
- MiniCssExtractPlugin.loader で CSS を 抽出して別ファイルとして出力

---

### **7. npm script の準備**

package.json の script フィールドのコマンドを追加

```json
~~
"scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development",
    "watch": "webpack --mode development --watch",
  },
~~
```

---

### **8. コンパイル**

コンパイルを実行

```zsh
$ npm run build
```

成功すると dist フォルダに main.css と main.js が生成される

npm run build は出力されるファイルが compressed で出力される  
npm run dev は expanded(普通の形)で出力される  
npm run watch はファイル変更が監視されて自動で dev モードでリビルドされる(終了は control + c)
