/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.after.state.update',
    authorization:true,
    check:{
        return_id:{
            type:'String',
            required:true
        },
        trade_no:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;