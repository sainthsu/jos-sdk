/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.sub.group.list.get',
    authorization:false,
    check:{
        group_id:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;