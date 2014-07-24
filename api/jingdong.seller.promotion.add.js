/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.seller.promotion.add',
    authorization:true,
    check:{
        name:{
            type:'String',
            required:true
        },
        type:{
            type:'Number',
            required:true
        },
        begin_time:{
            type:'String',
            required:true
        },
        end_time:{
            type:'String',
            required:true
        },
        bound:{
            type:'Number',
            required:false
        },
        member:{
            type:'Number',
            required:false
        },
        slogan:{
            type:'String',
            required:false
        },
        comment:{
            type:'String',
            required:false
        }
    }
}

module.exports = api;