/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.area.town.get',
    authorization:false,
    check:{
        parent_id:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;