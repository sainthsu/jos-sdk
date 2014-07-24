/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.area.limit.update',
    authorization:true,
    check:{
        levs:{
            type:'String',
            required:true
        },
        area_ids:{
            type:'String',
            required:true
        },
        area_fids:{
            type:'String',
            required:true
        },
        ware_id:{
            type:'String',
            required:true
        },
        type:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;