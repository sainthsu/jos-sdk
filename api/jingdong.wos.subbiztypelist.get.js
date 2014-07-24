/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.wos.subbiztypelist.get',
    authorization:false,
    check:{
        biztype_id:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;