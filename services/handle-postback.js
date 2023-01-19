const { client } = require("../config/line");
const { updateRepairFrom } = require("./repair");


exports.handlePostback = async(event) => {
    let repairDetail = event.postback.data;
    let repairId = global.repairId;
    console.log(repairDetail);
  //update lat, long repair table

  // send repair detail
  const repairData = {
      detail: repairDetail,
      repair_status: 1,
  }
  await updateRepairFrom(repairId, repairData);

  let msg = { type: "text", text: "ได้รับรายการแจ้งซ่อมเรียบร้อยค่ะ" };


  return client.replyMessage(event.replyToken, msg);
};
