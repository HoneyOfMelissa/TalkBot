const TalkBot = require('./TalkBot');

/**
 * APIエントリポイント
 */
exports.handler = async (event) => {
    console.log('EVENT:', JSON.stringify(event));
    
    var talkBot = new TalkBot(process.env.TALK_API_KEY);
    return await talkBot.getReplyMessageAsync(event.query);
};