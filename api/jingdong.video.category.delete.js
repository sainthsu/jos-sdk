/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.video.category.delete',
    authorization:true,
    check:{
        category_ids:{
            type:'NumberArray',
            required:true
        }
    }
};

module.exports = api;