/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.logistics.order.search',
    authorization:true,
    check:{
        receipt_nos:{
            type:'String',
            required:true
        },
        status:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;