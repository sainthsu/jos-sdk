/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.im.pop.passlog.get',
    authorization:true,
    check:{
        waiter:{
            type:'StringArray',
            required:false
        },
        startTime:{
            type:'Date',
            required:true
        },
        endTime:{
            type:'Date',
            required:true
        },
        page:{
            type:'Number',
            required:false
        },
        pageSize:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;