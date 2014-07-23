/**
 * Created by saint on 7/23/14.
 */
var api = {
    method:'360buy.ware.get.attribute',
    authorization:true,
    check:{
        cid:{
            type:'String',
            required:true
        },
        is_key_prop:{
            type:'String',
            required:false
        },
        is_sale_prop:{
            type:'String',
            required:false
        },
        aid:{
            type:'String',
            required:false
        },
        fields:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;
