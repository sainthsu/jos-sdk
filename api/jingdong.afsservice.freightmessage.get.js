/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.afsservice.freightmessage.get',
    authorization:true,
    check:{
        afsServiceId:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;