/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.logistics.otherInstore.add',
    authorization:true,
    check:{
        instore_type:{
            type:'String',
            required:true
        },
        po_no:{
            type:'String',
            required:true
        },
        expected_date:{
            type:'String',
            required:false
        },
        approver:{
            type:'String',
            required:false
        },
        warehouse_no:{
            type:'String',
            required:true
        },
        goods_no:{
            type:'StringArray',
            required:false
        },
        isv_goods_no:{
            type:'StringArray',
            required:false
        },
        expected_qty:{
            type:'NumberArray',
            required:true
        },
        goods_status:{
            type:'StringArray',
            required:true
        }
    }
};

module.exports = api;