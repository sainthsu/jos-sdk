/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.seller.promotion.ordermode.add',
    authorization:true,
    check:{
        promo_id:{
            type:'Number',
            required:true
        },
        favor_mode:{
            type:'Number',
            required:true
        },
        quota:{
            type:'NumberArray',
            required:true
        },
        rate:{
            type:'NumberArray',
            required:false
        },
        plus:{
            type:'NumberArray',
            required:false
        },
        minus:{
            type:'NumberArray',
            required:false
        },
        link:{
            type:'String',
            required:false
        }
    }
}

module.exports = api;