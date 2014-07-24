/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.imgzone.picture.delete',
    authorization:true,
    check:{
        picture_ids:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;