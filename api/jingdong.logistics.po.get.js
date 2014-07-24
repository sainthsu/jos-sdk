/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.logistics.po.get',
    authorization:true,
    check:{
        inbound_no:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;