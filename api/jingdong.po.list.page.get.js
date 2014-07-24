/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.im.pop.chatlog.fuzzy.query',
    authorization:true,
    check:{
        deliverCenterId:{
            type:'Number',
            required:false
        },
        status:{
            type:'Number',
            required:false
        },
        createdDateStart:{
            type:'Date',
            required:false
        },
        createdDateEnd:{
            type:'Date',
            required:false
        },
        isEptCustomized:{
            type:'Boolean',
            required:false
        },
        pageIndex:{
            type:'Number',
            required:true
        },
        pageSize:{
            type:'Number',
            required:true
        },
        orderIds:{
            type:'NumberArray',
            required:false
        },
        wareIds:{
            type:'NumberArray',
            required:false
        },
        states:{
            type:'NumberArray',
            required:false
        },
        confirmStates:{
            type:'NumberArray',
            required:false
        },
        orderAttributes:{
            type:'NumberArray',
            required:false
        }
    }
};

module.exports = api;