/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.imgzone.picture.replace',
    authorization:true,
    check:{
        picture_id:{
            type:'String',
            required:true
        },
        image_data:{
            type:'ByteArray',
            required:true
        }
    }
};

module.exports = api;