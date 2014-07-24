/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.logistics.po.add',
    authorization:true,
    check:{
        channels_seller_no:{
            type:'String',
            required:true
        },
        po_no:{
            type:'String',
            required:true
        },
        warehouse_no:{
            type:'String',
            required:true
        },
        expect_date:{
            type:'String',
            required:true
        },
        supplier_name:{
            type:'String',
            required:false
        },
        supplier_no:{
            type:'String',
            required:false
        },
        approver:{
            type:'String',
            required:false
        },
        goods_no:{
            type:'StringArray',
            required:true
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