/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.order.orderDelete.apply',
    authorization:true,
    check:{
        order_id:{
            type:'String',
            required:true
        },
        del_apply_type:{
            type:'String',
            required:true
        },
        del_apply_reason:{
            type:'String',
            required:false
        }

    }
}

module.exports = api;