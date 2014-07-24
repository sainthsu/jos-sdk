/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.imgzone.picture.isreferenced',
    authorization:true,
    check:{
        picture_id:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;