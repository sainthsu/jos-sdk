/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.crm.model.member.get',
    authorization:true,
    check:{
        model_id:{
            type:'Number',
            required:true
        },
        current_page:{
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