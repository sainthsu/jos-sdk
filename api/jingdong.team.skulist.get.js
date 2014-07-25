/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.skulist.get',
    authorization:false,
    check:{
        team_id:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;