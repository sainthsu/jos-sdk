/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.search',
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
        },
        team_price_order:{
            type:'String',
            required:false
        },
        now_number_order:{
            type:'String',
            required:false
        },
        start:{
            type:'Number',
            required:false
        },
        limit:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;