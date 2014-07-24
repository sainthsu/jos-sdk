/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.order.vender.remark.update',
    authorization:true,
    check:{
        order_id:{
            type:'String',
            required:true
        },
        remark:{
            type:'String',
            required:true
        },
        trade_no:{
            type:'String',
            required:false
        },
        flag:{
            type:'String',
            required:false
        }

    }
}

module.exports = api;