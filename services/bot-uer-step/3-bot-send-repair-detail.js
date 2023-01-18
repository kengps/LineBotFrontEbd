exports.botSendRepairDetail = () => {
let items = [];

let repairDetail = ['นอนไม่หลับ','กินข้าวไม่ได้','ตัวร้อน','น้ำมูกไหล','ไม่อยากอาบน้ำ','อยากอยู่คนเดียว','ไม่มีอะไรทำ','ว่างๆ เบื่อๆ','เคี้ยวข้าวไม่ละเอียด','ดื่มน้ำลืมเคี้ยว']

items = repairDetail.map((item)=>{
    return {
        type: 'action',
        action: {
            type: 'postback',
            label: item,
            data: item
        }
    }
})
  let msg = {
    type: "text",
    text: "แจ้งอาการที่เป็น",
    quickReply: {
      items: items

    },
  };

  return msg;
};
