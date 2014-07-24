/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.video.category.get',
    authorization:true,
    check:{
        category_id:{
            type:'Number',
            required:false
        },
        category_name:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;