/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.afsservice.alltask.get',
    authorization:true,
    check:{
        afsServiceId:{
            type:'Number',
            required:false
        },
        pageNumber:{
            type:'Number',
            required:true
        },
        pageSize:{
            type:'Number',
            required:true
        },
        customerPin:{
            type:'String',
            required:false
        },
        orderId:{
            type:'Number',
            required:false
        },
        afsApplyTimeBegin:{
            type:'Date',
            required:false
        },
        afsApplyTimeEnd:{
            type:'Date',
            required:false
        },
        approvedDateBegin:{
            type:'Date',
            required:false
        },
        approvedDateEnd:{
            type:'Date',
            required:false
        }
    }
};

module.exports = api;