/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.dropship.dps.searchsingle',
    authorization:true,
    check:{
        customOrderId:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;