/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.logistics.o2o.anti_dispatch.update',
    authorization:true,
    check:{
        station_no:{
            type:'String',
            required:true
        },
        order_id:{
            type:'String',
            required:true
        },
        state_operator:{
            type:'String',
            required:true
        },
        real_shop:{
            type:'String',
            required:true
        },
        anti_dispatcher_remark:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;