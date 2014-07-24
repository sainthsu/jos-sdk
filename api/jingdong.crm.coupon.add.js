/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.crm.coupon.add',
    authorization:true,
    check:{
        coupon_name:{
            type:'String',
            required:true
        },
        coupon_amount:{
            type:'Number',
            required:true
        },
        condition:{
            type:'Number',
            required:true
        },
        denomination:{
            type:'Number',
            required:true
        },
        start_time:{
            type:'Date',
            required:true
        },
        end_time:{
            type:'Date',
            required:true
        }
    }
};

module.exports = api;