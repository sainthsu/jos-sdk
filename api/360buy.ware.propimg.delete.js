/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.propimg.delete',
    authorization:true,
    check:{
        ware_id:{
            type:'String',
            required:true
        },
        attribute_value_id:{
            type:'String',
            required:true
        },
        image_id:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;