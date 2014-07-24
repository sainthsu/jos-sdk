/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.after.search',
    authorization:true,
    check:{
        query_fields:{
            type:'StringArray',
            required:true
        },
        select_fields:{
            type:'String',
            required:true
        },
        page:{
            type:'String',
            required:true
        },
        page_size:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;