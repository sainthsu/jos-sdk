/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.kuaiche.zn.keywordgroup.list.search',
    authorization:true,
    check:{
        third_category_id:{
            type:'Number',
            required:true
        },
        sort_field:{
            type:'String',
            required:false
        },
        sort_type:{
            type:'Number',
            required:false
        },
        page_size:{
            type:'Number',
            required:false
        },
        page_index:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;