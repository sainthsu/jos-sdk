/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.kuaiche.account.incomexpense.search',
    authorization:true,
    check:{
        in_out_type:{
            type:'Number',
            required:false
        },
        type:{
            type:'Number',
            required:false
        },
        check_type:{
            type:'Number',
            required:false
        },
        page_index:{
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