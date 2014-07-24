/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'360buy.ware.template.delete',
    authorization:true,
    check:{
        id:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;