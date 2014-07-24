/**
 * Created by saint on 7/24/14.
 */
var api = {
    method:'360buy.wares.list.get',
    authorization:true,
    check:{
        ware_id:{
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