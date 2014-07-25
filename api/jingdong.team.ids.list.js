/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.ids.list',
    authorization:false,
    check:{
        teamId:{
            type:'String',
            required:true
        },
        IsDetail:{
            type:'String',
            required:true
        },
        client:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;