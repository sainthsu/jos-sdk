/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.rest.workorder.reply',
    authorization:true,
    check:{
        work_id:{
            type:'Number',
            required:true
        },
        reply_content:{
            type:'String',
            required:true
        },
        work_type:{
            type:'Number',
            required:true
        },
        work2_type:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;