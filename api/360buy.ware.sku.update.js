/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.sku.update',
    authorization:true,
    check:{
        sku_id:{
            type:'String',
            required:true
        },
        ware_id:{
            type:'String',
            required:true
        },
        outer_id:{
            type:'String',
            required:false
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
        }

    }
}

module.exports = api;