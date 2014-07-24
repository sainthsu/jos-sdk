/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'360buy.order.sop.outstorage',
    authorization:true,
    check:{
        logistics_id:{
            type:'String',
            required:true
        },
        waybill:{
            type:'String',
            required:false
        },
        order_id:{
            type:'String',
            required:true
        },
        trade_no:{
            type:'String',
            required:false
        }

    }
}

module.exports = api;