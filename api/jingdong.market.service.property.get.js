/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.market.service.property.get',
    authorization:true,
    check:{
        service_item_code:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;