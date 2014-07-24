/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.increment.customer.permit',
    authorization:true,
    check:{
        topics:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;