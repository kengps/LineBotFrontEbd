const { client } = require("../config/line");


exports.handleFollow = async (event)=>{
  const userId = event.source.userId

  console.log("userId คือ ", userId);

   const profile = await client.getProfile(userId);

   console.log(profile);
}

