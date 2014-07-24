/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.etms.trace.get',
    authorization:true,
    check:{
        waybillCode:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;