const config = require("../config/line");
const { botSendCamera } = require("./bot-uer-step/1-bot-send-camera");
const {deleteImageWhenUnCompleted,deleteRepairFormUnCompleted, findAllRepairFormByUser,} = require("./repair");
const { sendRepairFormUser } = require("./send-repairform-user");



exports.handleMessage = async (event) => {
  let msg;
  let userId = event.source.userId;
  let msgFormUser = event.message.text.trim();

  if (msgFormUser === "เริ่มการแจ้งซ่อม") {
    await deleteImageWhenUnCompleted(userId);
    await deleteRepairFormUnCompleted(userId);
    msg = botSendCamera();
  } else if (msgFormUser === "ยกเลิกการแจ้งซ่อม") {
    await deleteImageWhenUnCompleted(userId);
    await deleteRepairFormUnCompleted(userId);
    msg = { type: "text", text: "ขอบคุณคร้าบบบบ ที่มาใช้บริการ" };
  }else if(msgFormUser === "ใบแจ้งซ่อมของฉัน") {
    msg =  await  sendRepairFormUser(event);
  } else {
    msg = {
      type: "text",
      text: 'กรูณาพิมพ์คำว่า "เริ่มการแจ้งซ่อม" หรือเลือกที่เมนู',
    };
  }

  return config.client.replyMessage(event.replyToken, msg);
};
