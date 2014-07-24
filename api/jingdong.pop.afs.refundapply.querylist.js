/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.pop.afs.refundapply.querylist',
    authorization:true,
    check:{
        status:{
            type:'String',
            required:false
        },
        id:{
            type:'String',
            required:false
        },
        order_id:{
            type:'String',
            required:false
        },
        buyer_id:{
            type:'String',
            required:false
        },
        buyer_name:{
            type:'String',
            required:false
        },
        apply_time_start:{
            type:'String',
            required:false
        },
        apply_time_end:{
            type:'String',
            required:false
        },
        check_time_start:{
            type:'String',
            required:false
        },
        check_time_end:{
            type:'String',
            required:false
        },
        page_index:{
            type:'Number',
            required:false
        },
        page_size:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;