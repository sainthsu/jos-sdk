/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.increment.customer.stop',
    authorization:false,
    check:{
        pins:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;