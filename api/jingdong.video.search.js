/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.video.search',
    authorization:true,
    check:{
        title:{
            type:'String',
            required:false
        },
        tag:{
            type:'String',
            required:false
        },
        category_id:{
            type:'Number',
            required:false
        },
        page:{
            type:'Number',
            required:false
        },
        page_size:{
            type:'Number',
            required:false
        },
        states:{
            type:'NumberArray',
            required:false
        }
    }
};

module.exports = api;