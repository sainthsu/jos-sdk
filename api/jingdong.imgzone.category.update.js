/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.imgzone.category.update',
    authorization:true,
    check:{
        cate_id:{
            type:'Number',
            required:true
        },
        cate_name:{
            type:'String',
            required:false
        },
        parent_cate_id:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;