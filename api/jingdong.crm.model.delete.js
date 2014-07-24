/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.crm.model.delete',
    authorization:true,
    check:{
        model_id:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;