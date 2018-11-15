# TalkBot

https://a3rt.recruit-tech.co.jp/product/talkAPI/  
で公開されているTalk APIをラップしているだけのプロジェクトです。  

## Getting Started

### 前提条件

* node.js
* npm
* APIキー([発行はこちら](https://a3rt.recruit-tech.co.jp/product/talkAPI/registered/))

### ダウンロード

    git clone https://github.com/HoneyOfMelissa/TalkBot.git  
    cd TalkBot

### パッケージインストール

    npm install

## APIキーを組み込む

process.env にAPIキーを組み込みます。  
組み込む内容は下記の通りですが、組み込む方法は各環境で判断ください。  

    TALK_API_KEY=<YOUR API KEY>

例)

* [dotenv](https://www.npmjs.com/package/dotenv)
* [lambda](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/env_variables.html)
