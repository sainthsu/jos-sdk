/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.hostingdata.jddp.status.get',
    authorization:false,
    check:{
        parameter:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;