/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.area.limit.search',
    authorization:true,
    check:{
        ware_id:{
            type:'String',
            required:true
        },
        type:{
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