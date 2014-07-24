/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.procurement.order.create',
    authorization:true,
    check:{
        deliverCenterId:{
            type:'Number',
            required:true
        },
        purchaserErpCode:{
            type:'String',
            required:true
        },
        remark:{
            type:'String',
            required:false
        },
        wareId:{
            type:'NumberArray',
            required:true
        },
        allocationDeliverCenterId:{
            type:'NumberArray',
            required:true
        },
        originalNum:{
            type:'NumberArray',
            required:true
        }

    }
};

module.exports = api;