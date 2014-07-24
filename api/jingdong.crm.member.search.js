/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.crm.member.search',
    authorization:true,
    check:{
        customer_pin:{
            type:'String',
            required:false
        },
        grade:{
            type:'String',
            required:false
        },
        min_last_trade_time:{
            type:'Date',
            required:false
        },
        max_last_trade_time:{
            type:'Date',
            required:false
        },
        min_trade_count:{
            type:'Number',
            required:false
        },
        max_trade_count:{
            type:'Number',
            required:false
        },
        avg_price:{
            type:'Number',
            required:false
        },
        min_trade_amount:{
            type:'Number',
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
}

module.exports = api;