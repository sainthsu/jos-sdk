/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.hostingdata.jddp.data.list.get',
    authorization:true,
    check:{
        sqlId:{
            type:'String',
            required:true
        },
        parameter:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;