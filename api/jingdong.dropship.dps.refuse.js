/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.dropship.dps.refuse',
    authorization:true,
    check:{
        customOrderId:{
            type:'Number',
            required:true
        },
        refuseReason:{
            type:'String',
            required:true
        }

    }
};

module.exports = api;