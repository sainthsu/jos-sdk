/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.seller.promotion.sku.list',
    authorization:true,
    check:{
        ware_id:{
            type:'Number',
            required:false
        },
        sku_id:{
            type:'Number',
            required:false
        },
        promo_id:{
            type:'String',
            required:true
        },
        bind_type:{
            type:'Number',
            required:false
        },
        page:{
            type:'Number',
            required:true
        },
        size:{
            type:'Number',
            required:true
        }
    }
}

module.exports = api;