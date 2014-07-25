/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.vc.return.order.list.page.get',
    authorization:true,
    check:{
        returnId:{
            type:'Number',
            required:false
        },
        fromDeliverCenterId:{
            type:'Number',
            required:false
        },
        returnStates:{
            type:'String',
            required:false
        },
        createDateBegin:{
            type:'Date',
            required:false
        },
        createDateEnd:{
            type:'Date',
            required:false
        },
        pageSize:{
            type:'Number',
            required:true
        },
        pageIndex:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;