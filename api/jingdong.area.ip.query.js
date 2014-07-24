/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.area.ip.query',
    authorization:false,
    check:{
        ip:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;