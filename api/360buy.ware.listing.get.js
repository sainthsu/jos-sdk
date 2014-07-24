/**
 * Created by saint on 7/24/14.
 */
var api = {
    method:'360buy.ware.listing.get',
    authorization:true,
    check:{
        cid:{
            type:'String',
            required:false
        },
        page:{
            type:'String',
            required:true
        },
        page_size:{
            type:'String',
            required:true
        },
        start_modified:{
            type:'String',
            required:false
        },
        end_modified:{
            type:'String',
            required:false
        },
        fields:{
            type:'String',
            required:false
        }
    }
}

module.exports = api;