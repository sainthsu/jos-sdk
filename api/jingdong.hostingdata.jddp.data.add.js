/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.hostingdata.jddp.data.add',
    authorization:true,
    check:{
        tableName:{
            type:'String',
            required:true
        },
        dataList:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;