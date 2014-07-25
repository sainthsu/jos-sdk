/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.nearbycount.get',
    authorization:false,
    check:{
        longitude:{
            type:'Number',
            required:true
        },
        latitude:{
            type:'Number',
            required:true
        },
        radius:{
            type:'Number',
            required:false
        },
        is_team_external_url:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;