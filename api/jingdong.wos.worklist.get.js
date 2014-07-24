/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.wos.worklist.get',
    authorization:true,
    check:{
        status:{
            type:'Number',
            required:false
        },
        order_id:{
            type:'Number',
            required:false
        },
        begin_date:{
            type:'Date',
            required:true
        },
        end_date:{
            type:'Date',
            required:true
        },
        page_number:{
            type:'Number',
            required:true
        },
        page_size:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;