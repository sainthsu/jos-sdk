/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.order.venderRemark.queryByOrderId',
    authorization:true,
    check:{
        order_id:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;