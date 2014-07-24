/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.kuaiche.zn.plan.list.search',
    authorization:true,
    check:{
        plan_name:{
            type:'String',
            required:false
        },
        mode:{
            type:'String',
            required:false
        },
        status:{
            type:'Number',
            required:false
        },
        is_query_by_status:{
            type:'String',
            required:false
        },
        begin:{
            type:'Number',
            required:false
        },
        end:{
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