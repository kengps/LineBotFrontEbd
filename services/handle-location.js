const {client} = require('../config/line');
const { botSendRepairDetail } = require('./bot-uer-step/3-bot-send-repair-detail');
//const { updateRepairFrom } = require('./repair');


exports.handleLocation = async (event) =>{
    const repairId = global.repairId
    //console.log(event.message);

     //update lat, long repair table
        let location = {type: 'Point', coordinates: [event.message.latitude, event.message.longitude]}
        const repairData = {
            location: location,
            repair_status: 0,
        }
        //  await updateRepairFrom(repairId, repairDa ta);
         // send repair detail
        let msg = botSendRepairDetail();

      return client.replyMessage(event.replyToken, msg);
}