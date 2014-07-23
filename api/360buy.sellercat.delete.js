/**
 * Created by saint on 7/23/14.
 */
var api = {
    method:'360buy.sellercat.delete',
    authorization:true,
    check:{
        cid:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;