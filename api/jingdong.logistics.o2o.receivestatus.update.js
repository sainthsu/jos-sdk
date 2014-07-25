/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.logistics.o2o.receivestatus.update',
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
        }
    }
};

module.exports = api;