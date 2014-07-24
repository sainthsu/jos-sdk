/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.dropship.dps.prerefund',
    authorization:true,
    check:{
        customOrderId:{
            type:'Number',
            required:true
        },
        approvalSuggestion:{
            type:'String',
            required:true
        },
        approvalState:{
            type:'String',
            required:true
        },
        id:{
            type:'Number',
            required:true
        },
        operatorState:{
            type:'Number',
            required:true
        }

    }
};

module.exports = api;