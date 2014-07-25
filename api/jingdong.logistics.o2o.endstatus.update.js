/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.logistics.o2o.endstatus.update',
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
        station_payment_cash:{
            type:'String',
            required:true
        },
        station_payment_pos:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;