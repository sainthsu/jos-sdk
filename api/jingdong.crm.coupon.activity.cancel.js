/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.crm.coupon.activity.cancel',
    authorization:true,
    check:{
        activity_id:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;