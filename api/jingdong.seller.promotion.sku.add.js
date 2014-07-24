/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.seller.promotion.sku.add',
    authorization:true,
    check:{
        promo_id:{
            type:'Number',
            required:true
        },
        sku_ids:{
            type:'NumberArray',
            required:true
        },
        jd_prices:{
            type:'StringArray',
            required:true
        },
        promo_prices:{
            type:'StringArray',
            required:false
        },
        seq:{
            type:'NumberArray',
            required:false
        },
        num:{
            type:'NumberArray',
            required:false
        },
        bind_type:{
            type:'NumberArray',
            required:false
        }
    }
}

module.exports = api;