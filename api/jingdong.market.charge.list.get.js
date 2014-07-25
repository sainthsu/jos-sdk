/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.market.charge.list.get',
    authorization:true,
    check:{
        service_code:{
            type:'String',
            required:false
        },
        service_id:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;