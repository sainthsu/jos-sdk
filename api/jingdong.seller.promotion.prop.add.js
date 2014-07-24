/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.seller.promotion.prop.add',
    authorization:true,
    check:{
        promo_id:{
            type:'Number',
            required:true
        },
        type:{
            type:'NumberArray',
            required:true
        },
        num:{
            type:'NumberArray',
            required:true
        },
        used_way:{
            type:'NumberArray',
            required:true
        }
    }
}

module.exports = api;