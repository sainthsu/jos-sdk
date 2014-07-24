/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.im.pop.chatlog.fuzzy.query',
    authorization:true,
    check:{
        waiter:{
            type:'String',
            required:false
        },
        customer:{
            type:'String',
            required:true
        },
        keyWord:{
            type:'String',
            required:true
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