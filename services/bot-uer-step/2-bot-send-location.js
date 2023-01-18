exports.botSendLocation = () => {
  let msg = {
    type: "text",
    text: "กรุณาส่งโลเคชั่น",
    quickReply: {
      items: [
        {
          type: "action",
          imageUrl: "https://codingthailand.com/site/img/location.png",
          action: {
            type: "location",
            label: "ส่งตำแหน่งที่อยู่ของคุณ",
          },
        },
        
        {
          type: "action",
          imageUrl: "https://codingthailand.com/site/img/cancel.png",
          action: {
            type: "message",
            label: "ยกเลิกแจ้งซ่อม",
            text: "ยกเลิกการแจ้งซ่อม",
          },
        },
      ],
    },
  }; 

  return msg;
};
