const userService = require('./user/index')



exports.handleUnFollow = async (event)=>{

 const userId = event.source.userId;
 //console.log("userId คือ ", event.source);
  const isExist =  await  userService.isActiveUser(userId);
  if(isExist){
       // await userService.removeUserById(userId);
        await userService.updateIsActiveUser(userId , 0);
  }
}
