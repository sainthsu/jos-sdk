/**
 * Created by saint on 7/23/14.
 */
var api = {
    method:'360buy.sellercat.update',
    authorization:true,
    check:{
        cid:{
            type:'String',
            required:true
        },
        name:{
            type:'String',
            required:false
        },
        home_show:{
            type:'String',
            required:false
        }
    }
}

module.exports = api;