/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.seller.promotion.delete',
    authorization:true,
    check:{
        promo_id:{
            type:'Number',
            required:true
        }
    }
}

module.exports = api;