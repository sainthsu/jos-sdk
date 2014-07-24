/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.procurement.order.confirm',
    authorization:true,
    check:{
        orderId:{
            type:'Number',
            required:true
        },
        deliveryTime:{
            type:'Date',
            required:false
        },
        wareId:{
            type:'NumberArray',
            required:true
        },
        deliverCenterId:{
            type:'NumberArray',
            required:true
        },
        backExplanationType:{
            type:'NumberArray',
            required:true
        },
        confirmNum:{
            type:'NumberArray',
            required:true
        }

    }
};

module.exports = api;