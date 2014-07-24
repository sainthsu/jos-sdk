/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.logistics.otherInstore.query',
    authorization:true,
    check:{
        in_bound_no:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;