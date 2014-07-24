/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'360buy.sku.custom.get',
    authorization:true,
    check:{
        outer_id:{
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