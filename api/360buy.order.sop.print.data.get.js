/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.order.sop.print.data.get',
    authorization:true,
    check:{
        order_id:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;