/**
 * Created by saint on 7/23/14.
 */
var api = {
    method:'360buy.ware.sku.add',
    authorization:true,
    check:{
        ware_id:{
            type:'String',
            required:true
        },
        attributes:{
            type:'String',
            required:true
        },
        jd_price:{
            type:'String',
            required:true
        },
        stock_num:{
            type:'String',
            required:true
        },
        trade_no:{
            type:'String',
            required:false
        },
        outer_id:{
            type:'String',
            required:false
        }
    }
}

module.exports = api;