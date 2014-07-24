/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'360buy.ware.template.add',
    authorization:true,
    check:{
        name:{
            type:'String',
            required:true
        },
        contents:{
            type:'StringArray',
            required:true
        }
    }
}

module.exports = api;