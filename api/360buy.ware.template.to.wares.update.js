/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.template.to.wares.update',
    authorization:true,
    check:{
        id:{
            type:'String',
            required:true
        },
        ware_ids:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;