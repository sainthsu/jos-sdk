/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.order.print',
    authorization:true,
    check:{
        order_id:{
            type:'String',
            required:true
        },
        optional_fields:{
            type:'String',
            required:false
        }

    }
}

module.exports = api;