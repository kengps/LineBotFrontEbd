const { client } = require("../config/line");

const userService = require("./user/index");
const { sendWelcomeMsg } = require('./send-welcome-msg');


exports.handleFollow = async (event) => {

  const userId = event.source.userId;
  //console.log("userId คือ ", event.source);

  //get profile user
  const profile = await client.getProfile(userId);

  // console.log(profile);


  //insert profile to table
  const isExist = await userService.isActiveUser(userId);
  if (!isExist) { // ถ้าไม่่มี user ให้ทำการเพิ่ม
    await userService.CreateUser(
      profile.userId,
      profile.displayName,
      profile.pictureUrl
    );
  } else {//แต่ถ้ามีแล้วให้ทำการ update ด้วย
    await userService.updateIsActiveUser(
      profile.userId,
      1,
      profile.displayName,
      profile.pictureUrl
    );
  }
  let msg;

  msg = sendWelcomeMsg();

  return client.replyMessage(event.replyToken, msg)
};
