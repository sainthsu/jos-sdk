/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.vc.create.return.order',
    authorization:true,
    check:{
        fromDeliverCenterId:{
            type:'Number',
            required:true
        },
        toDeliverCenterId:{
            type:'Number',
            required:true
        },
        purchaseErpCode:{
            type:'String',
            required:true
        },
        balanceType:{
            type:'Number',
            required:false
        },
        transportType:{
            type:'Number',
            required:false
        },
        receiverName:{
            type:'String',
            required:false
        },
        receiverCell:{
            type:'String',
            required:false
        },
        pikerID:{
            type:'String',
            required:false
        },
        reservedPickUpDate:{
            type:'Date',
            required:false
        },
        receiverAddress:{
            type:'String',
            required:false
        },
        postCode:{
            type:'String',
            required:false
        },
        wareId:{
            type:'NumberArray',
            required:true
        },
        returnNum:{
            type:'NumberArray',
            required:true
        }

    }
};

module.exports = api;