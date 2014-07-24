/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.video.category.add',
    authorization:true,
    check:{
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