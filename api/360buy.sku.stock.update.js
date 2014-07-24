/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.sku.stock.update',
    authorization:true,
    check:{
        sku_id:{
            type:'String',
            required:false
        },
        outer_id:{
            type:'String',
            required:false
        },
        quantity:{
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