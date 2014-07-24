/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.propimg.update',
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
        is_main_pic:{
            type:'Boolean',
            required:false
        },
        image_id:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;