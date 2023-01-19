const { default: axios } = require("axios");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
const { botSendLocation } = require("./bot-uer-step/2-bot-send-location");
const { botSendCamera } = require("./bot-uer-step/1-bot-send-camera");
const { client } = require("../config/line");
const { createRepairFrom } = require("./repair");

exports.handleImage = async (event) => {
  let msg;
  console.log(event.message);

  if (event.message.imageSet === undefined) {
    const userId = event.source.userId;
    const messageId = event.message.id;
    if (event.message.imageSet === undefined) {
      // ส่งมารูปเดียว
      const response = await axios.get(
        `https://api-data.line.me/v2/bot/message/${messageId}/content`,
        {
          headers: {
            Authorization: "Bearer " + process.env.CHANNEL_ACCESS_TOKEN,
          },
          responseType: "stream",
        }
      );
      //กำหนดหรือหา image path
      const projectPath = path.resolve("./");
      const imagePath = `${projectPath}/public/upload/`;
      //สุ่มชื่อไฟล์ใหม่ พร้อมนามสกุล
      const newFilename = `${uuid.v4()}.jpg`;
      //เขียนไฟล์ไปยัง image path
      response.data.pipe(fs.createWriteStream(imagePath + newFilename));

      //  สร้างใบแจ้งซ่อมใหม่ บันทึกไปที่ตาราง Repair
      const repairData = {
        created_by: userId,
        picture: newFilename,
        repair_status: 0, //อยู่ระหว่างการแจ้งซ่อม
      };
      const repairForm = await createRepairFrom(repairData);
      global.repairId = repairForm.id;
      //send location 
      msg = botSendLocation();
      return client.replyMessage(event.replyToken, msg);
    }
  } else {
    // ส่งมามากกว่า 2 รูป
    if (event.message.imageSet.index === 1) {
      let msg1 = {
        type: "text",
        text: "สามารถส่งรูปได้เพียงครั้งละ 1 รูปเท่านั้น",
      };
      let msg2 = botSendCamera();
      let msg = [];
      msg.push(msg1);
      msg.push(msg2);
      return client.replyMessage(event.replyToken, msg);
    }
  }

 
};
