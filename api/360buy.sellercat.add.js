/**
 * Created by saint on 7/23/14.
 */

var api = {
    method:'360buy.sellercat.add',
    authorization:true,
    check:{
        parent_id:{
            type:'String',
            required:true
        },
        name:{
            type:'String',
            required:true
        },
        is_open:{
            type:'Boolean',
            required:false
        },
        is_home_show:{
            type:'Boolean',
            required:false
        }
    }
}

module.exports = api;
