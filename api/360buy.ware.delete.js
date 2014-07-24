/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.delete',
    authorization:true,
    check:{
        ware_id:{
            type:'String',
            required:true
        },
        trade_no:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;