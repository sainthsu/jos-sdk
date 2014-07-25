/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.team.current.list',
    authorization:false,
    check:{
        cityId:{
            type:'Number',
            required:true
        },
        teamType:{
            type:'String',
            required:false
        },
        areaId:{
            type:'Number',
            required:false
        },
        sqId:{
            type:'Number',
            required:false
        },
        groupId:{
            type:'Number',
            required:false
        },
        group2Id:{
            type:'Number',
            required:false
        },
        sort:{
            type:'Number',
            required:false
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
            required:true
        }
    }
};

module.exports = api;