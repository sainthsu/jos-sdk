/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.order.sopl.outstorage',
    authorization:true,
    check:{
        order_id:{
            type:'String',
            required:true
        },
        package_num:{
            type:'String',
            required:true
        },
        logistics_id:{
            type:'String',
            required:true
        },
        waybill:{
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