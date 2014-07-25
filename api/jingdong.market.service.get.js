/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.market.service.get',
    authorization:false,
    check:{
        service_code:{
            type:'String',
            required:false
        },
        id:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;