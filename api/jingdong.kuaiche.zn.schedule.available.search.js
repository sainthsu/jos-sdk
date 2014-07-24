/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.kuaiche.zn.schedule.available.search',
    authorization:false,
    check:{
        space_id:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;