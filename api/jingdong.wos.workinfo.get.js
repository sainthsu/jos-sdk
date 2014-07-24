/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.wos.workinfo.get',
    authorization:true,
    check:{
        work_id:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;