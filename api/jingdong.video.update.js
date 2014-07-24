/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.video.update',
    authorization:true,
    check:{
        video_id:{
            type:'Number',
            required:true
        },
        title:{
            type:'String',
            required:true
        },
        cover_url:{
            type:'String',
            required:false
        },
        type:{
            type:'Number',
            required:false
        },
        tag:{
            type:'String',
            required:false
        },
        desc:{
            type:'String',
            required:false
        },
        category_id:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;