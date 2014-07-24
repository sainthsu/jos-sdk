/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.video.category.update',
    authorization:true,
    check:{
        category_id:{
            type:'Number',
            required:true
        },
        category_name:{
            type:'String',
            required:true
        },
        order:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;