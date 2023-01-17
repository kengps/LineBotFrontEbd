const { client } = require("../config/line");
<<<<<<< HEAD


exports.handleFollow = async (event)=>{
  const userId = event.source.userId

  console.log("userId คือ ", userId);

   const profile = await client.getProfile(userId);

   console.log(profile);
}
=======
const userService = require("./user/index");

exports.handleFollow = async (event) => {
  const userId = event.source.userId;
  //console.log("userId คือ ", event.source);

  //get profile user
  const profile = await client.getProfile(userId);

  // console.log(profile);
>>>>>>> cb3acbb6795adcb9a788a059ac102808b9742307

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
};
