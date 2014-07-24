/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'360buy.overseas.order.sop.outstorage',
    authorization:true,
    check:{
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