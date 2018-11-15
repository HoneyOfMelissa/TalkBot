'use strict';

var rp = require('request-promise');

/**
 * TalkBot
 * https://a3rt.recruit-tech.co.jp/product/talkAPI/
 */
module.exports = class TalkBot {
    /**
     * コンストラクタ
     * @param {String} apiKey APIキー
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    
    /**
     * 入力されたテキストに対する雑談応答を返却します。
     * @param {String} 入力テキスト
     * @returns {String} 応答メッセージ
     */
    async getReplyMessageAsync(query) {
        var options = {
            method: 'POST',
            uri: 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
            form: {
                apikey: this.apiKey,
                query: query
            }
        };
        
        return await rp(options)
            .then(function (response) {
                console.log('RESPONSE:', response);
                let jsonObj = JSON.parse(response);
                return jsonObj.results[0].reply;
            })
            .catch(function (err) {
                console.log('RESPONSE:', err);
                return "ちょっと分かりません";
            });
    }
};