/**
 * Created by saint on 7/25/14.
 */


var api = {
    method:'jingdong.logistics.o2o.order.carriage',
    authorization:true,
    check:{
        order_id:{
            type:'String',
            required:true
        },
        carrier_no:{
            type:'String',
            required:true
        },
        deliver_no:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;