/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'360buy.order.fbp.search',
    authorization:true,
    check:{
        start_date:{
            type:'String',
            required:true
        },
        end_date:{
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
        },
        optional_fields:{
            type:'String',
            required:false
        }

    }
}

module.exports = api;