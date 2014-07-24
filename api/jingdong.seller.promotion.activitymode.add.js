/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.seller.promotion.activitymode.add',
    authorization:true,
    check:{
        promo_id:{
            type:'Number',
            required:true
        },
        num_bound:{
            type:'Number',
            required:false
        },
        freq_bound:{
            type:'Number',
            required:false
        },
        per_max_num:{
            type:'Number',
            required:false
        },
        per_min_num:{
            type:'Number',
            required:false
        }
    }
}

module.exports = api;