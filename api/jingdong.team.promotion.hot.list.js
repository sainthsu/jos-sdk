/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.promotion.hot.list',
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
            required:true
        }
    }
};

module.exports = api;