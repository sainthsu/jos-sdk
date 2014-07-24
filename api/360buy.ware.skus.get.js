/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.skus.get',
    authorization:true,
    check:{
        ware_ids:{
            type:'String',
            required:true
        },
        fields:{
            type:'String',
            required:true
        }

    }
}

module.exports = api;