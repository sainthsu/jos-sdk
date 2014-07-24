/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.sku.get',
    authorization:true,
    check:{
        sku_id:{
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