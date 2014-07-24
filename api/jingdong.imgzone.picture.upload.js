/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.imgzone.picture.upload',
    authorization:true,
    check:{
        image_data:{
            type:'ByteArray',
            required:true
        },
        parent_cate_id:{
            type:'Number',
            required:false
        },
        picture_name:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;