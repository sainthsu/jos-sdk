/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.arealist.get',
    authorization:false,
    check:{
        district_id:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;