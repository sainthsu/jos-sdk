/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.market.service.qt.report.list.get',
    authorization:true,
    check:{
        service_item_code:{
            type:'String',
            required:true
        },
        qt_type:{
            type:'Number',
            required:false
        },
        sp_name:{
            type:'String',
            required:true
        },
        start_time:{
            type:'String',
            required:false
        },
        end_time:{
            type:'String',
            required:false
        },
        pin:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;