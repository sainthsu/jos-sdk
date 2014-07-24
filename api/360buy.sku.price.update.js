/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'360buy.sku.price.update',
    authorization:true,
    check:{
        sku_id:{
            type:'String',
            required:true
        },
        outer_id:{
            type:'String',
            required:true
        },
        price:{
            type:'String',
            required:true
        },
        trade_no:{
            type:'String',
            required:true
        },
        jd_price:{
            type:'String',
            required:true
        },
        market_price:{
            type:'String',
            required:true
        }

    }
}

module.exports = api;