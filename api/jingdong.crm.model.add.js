/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.crm.model.add',
    authorization:true,
    check:{
        model_name:{
            type:'String',
            required:true
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
        }
    }
}

module.exports = api;