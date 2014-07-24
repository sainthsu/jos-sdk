/**
 * Created by saint on 7/24/14.
 */



var api = {
    method:'jingdong.crm.coupon.search',
    authorization:true,
    check:{
        coupon_id:{
            type:'Number',
            required:false
        },
        denomination:{
            type:'Number',
            required:false
        },
        end_time:{
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