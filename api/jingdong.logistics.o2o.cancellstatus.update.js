/**
 * Created by saint on 7/25/14.
 */


var api = {
    method:'jingdong.logistics.o2o.cancellstatus.update',
    authorization:true,
    check:{
        station_no:{
            type:'String',
            required:false
        },
        order_id:{
            type:'String',
            required:false
        },
        state_operator:{
            type:'String',
            required:true
        },
        order_cancel_reason:{
            type:'String',
            required:true
        },
        order_cancel_remark:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;