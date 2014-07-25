/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.market.service.qt.subscribe.get',
    authorization:true,
    check:{
        service_item_code:{
            type:'String',
            required:true
        },
        pin:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;