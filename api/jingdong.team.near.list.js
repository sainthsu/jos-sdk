/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.near.list',
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
            required:true
        },
        isTeamExternalUrl:{
            type:'Number',
            required:false
        },
        client:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;