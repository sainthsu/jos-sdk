/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.template.add',
    authorization:true,
    check:{
        id:{
            type:'String',
            required:true
        },
        fields:{
            type:'String',
            required:false
        }
    }
}

module.exports = api;