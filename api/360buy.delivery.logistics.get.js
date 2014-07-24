/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'360buy.delivery.logistics.get',
    authorization:true,
    check:{
        optional_fields:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;