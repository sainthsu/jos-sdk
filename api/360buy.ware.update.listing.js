/**
 * Created by saint on 7/23/14.
 */
var api = {
    method:'360buy.ware.update.listing',
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
