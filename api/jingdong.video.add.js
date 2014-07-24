/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.video.add',
    authorization:true,
    check:{
        video_upload_ID:{
            type:'String',
            required:true
        },
        title:{
            type:'String',
            required:true
        },
        cover_url:{
            type:'String',
            required:true
        },
        desc:{
            type:'String',
            required:true
        },
        type:{
            type:'Number',
            required:true
        },
        capacity:{
            type:'Number',
            required:true
        },
        time:{
            type:'Number',
            required:true
        },
        tag:{
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