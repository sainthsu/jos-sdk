/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.promotion.same.list',
    authorization:false,
    check:{
        teamId:{
            type:'Number',
            required:true
        },
        cityId:{
            type:'Number',
            required:true
        },
        client:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;