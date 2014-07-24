/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.ware.propimg.add',
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
            type:'String',
            required:false
        },
        image:{
            type:'ByteArray',
            required:true
        }
    }
}

/*
 图片数据（注意：签名时不需要添加此参数，image参数通过post 输出流方式发送）图片类型只支持：
 png和jpg格式，图片须800x800；不能大于1M
 */
module.exports = api;