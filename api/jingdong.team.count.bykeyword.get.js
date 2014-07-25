/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.count.bykeyword.get',
    authorization:false,
    check:{
        key_word:{
            type:'String',
            required:false
        },
        city_name:{
            type:'String',
            required:false
        },
        is_team_external_url:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;