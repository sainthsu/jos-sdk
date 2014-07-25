/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.market.service.list.get',
    authorization:false,
    check:{
        page_size:{
            type:'Number',
            required:false
        },
        page:{
            type:'Number',
            required:false
        },
        service_status:{
            type:'Number',
            required:false
        },
        start_date:{
            type:'Date',
            required:false
        },
        end_date:{
            type:'Date',
            required:false
        }
    }
};

module.exports = api;