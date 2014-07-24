/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.etms.waybillcode.get',
    authorization:true,
    check:{
        preNum:{
            type:'String',
            required:true
        },
        customerCode:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;