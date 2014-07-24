/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.imgzone.category.add',
    authorization:true,
    check:{
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