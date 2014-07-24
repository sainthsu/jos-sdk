/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.update.delisting',
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
