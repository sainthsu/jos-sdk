/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.video.query',
    authorization:true,
    check:{
        video_ids:{
            type:'NumberArray',
            required:true
        }
    }
};

module.exports = api;