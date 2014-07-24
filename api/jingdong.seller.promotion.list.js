/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.seller.promotion.list',
    authorization:true,
    check:{
        type:{
            type:'Number',
            required:true
        },
        status:{
            type:'Number',
            required:false
        },
        begin_time:{
            type:'String',
            required:false
        },
        end_time:{
            type:'String',
            required:false
        },
        sku_id:{
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