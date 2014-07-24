/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.afsservice.originalorderid.get',
    authorization:true,
    check:{
        orderId:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;