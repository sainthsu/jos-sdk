/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.keyword.list',
    authorization:false,
    check:{
        keyWord:{
            type:'String',
            required:true
        },
        cityName:{
            type:'String',
            required:true
        },
        start:{
            type:'Number',
            required:true
        },
        limit:{
            type:'Number',
            required:true
        },
        isTeamExternalUrl:{
            type:'Number',
            required:false
        },
        client:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;