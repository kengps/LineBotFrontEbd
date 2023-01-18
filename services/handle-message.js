const config = require('../config/line');
const { botSendCamera } = require('./bot-uer-step/1-bot-send-camera');

exports.handleMessage = async (event) => {
    let msg;

    let msgFormUser = event.message.text.trim();

    if(msgFormUser === 'เริ่มการแจ้งซ่อม'){
        msg = botSendCamera();

    }else if(msgFormUser === 'ยกเลิกการแจ้งซ่อม'){
        msg = {type: text , text: 'ขอบคุณคร้าบบบบ ที่มาใช้บริการ'}
    }else {
        msg = {type: text , text: 'กรูณาพิมพ์คำว่า "เริ่มการแจ้งซ่อม" หรือเลือกที่เมนู'}
    }


    return config.client.replyMessage(event.replyToken, msg);
}