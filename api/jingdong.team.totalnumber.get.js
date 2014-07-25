/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.totalnumber.get',
    authorization:false,
    check:{
        city_id:{
            type:'Number',
            required:false
        },
        group_id:{
            type:'Number',
            required:false
        },
        team_type:{
            type:'String',
            required:false
        },
        district_id:{
            type:'Number',
            required:false
        },
        area_id:{
            type:'Number',
            required:false
        },
        group2_id:{
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