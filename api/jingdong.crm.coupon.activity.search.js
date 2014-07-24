/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.crm.coupon.activity.search',
    authorization:true,
    check:{
        coupon_id:{
            type:'Number',
            required:false
        },
        activity_id:{
            type:'Number',
            required:false
        },
        activity_name:{
            type:'String',
            required:false
        },
        ativity_status:{
            type:'Number',
            required:false
        },
        start_send_time:{
            type:'Date',
            required:false
        },
        end_send_time:{
            type:'Date',
            required:false
        },
        current_page:{
            type:'Number',
            required:true
        },
        page_size:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;