/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.logistics.o2o.order.queryAfs',
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
        customer_order_id:{
            type:'String',
            required:false
        },
        customer_order_state:{
            type:'String',
            required:false
        },
        customer_order_time_start:{
            type:'String',
            required:false
        },
        customer_order_time_end:{
            type:'String',
            required:false
        },
        customer_order_update_time_start:{
            type:'String',
            required:false
        },
        customer_order_update_time_end:{
            type:'String',
            required:false
        },
        current_page:{
            type:'Number',
            required:true
        },
        page_num:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;