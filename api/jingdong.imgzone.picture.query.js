/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.imgzone.picture.query',
    authorization:true,
    check:{
        picture_id:{
            type:'String',
            required:false
        },
        picture_cate_id:{
            type:'Number',
            required:false
        },
        picture_name:{
            type:'String',
            required:false
        },
        start_date:{
            type:'Date',
            required:false
        },
        end_Date:{
            type:'Date',
            required:false
        },
        page_num:{
            type:'Number',
            required:false
        },
        page_size:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;