/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.dropship.dps.delivery',
    authorization:true,
    check:{
        customOrderId:{
            type:'Number',
            required:true
        },
        carrierId:{
            type:'Number',
            required:true
        },
        carrierBusinessName:{
            type:'String',
            required:true
        },
        shipNo:{
            type:'String',
            required:true
        },
        estimateDate:{
            type:'Date',
            required:true
        }

    }
};

module.exports = api;