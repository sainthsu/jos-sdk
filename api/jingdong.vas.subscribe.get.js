/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.vas.subscribe.get',
    authorization:false,
    check:{
        user_name:{
            type:'String',
            required:true
        },
        item_code:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;