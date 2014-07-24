/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.afsservice.category.get',
    authorization:true,
    check:{
        afsCategoryId:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;