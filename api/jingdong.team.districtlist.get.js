/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.districtlist.get',
    authorization:false,
    check:{
        city_id:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;