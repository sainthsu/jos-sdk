/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'360buy.ware.template.update',
    authorization:true,
    check:{
        id:{
            type:'String',
            required:true
        },
        name:{
            type:'String',
            required:false
        },
        contents:{
            type:'StringArray',
            required:false
        }
    }
}

module.exports = api;