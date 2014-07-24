/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.logistics.returnorder.add',
    authorization:true,
    check:{
        seller_no:{
            type:'String',
            required:false
        },
        warehouse_no:{
            type:'String',
            required:true
        },
        inbound_no:{
            type:'String',
            required:true
        },
        josl_outbound_no:{
            type:'String',
            required:true
        },
        expected_date:{
            type:'Date',
            required:true
        },
        isv_source:{
            type:'String',
            required:false
        },
        approver:{
            type:'String',
            required:true
        },
        goods_no:{
            type:'StringArray',
            required:true
        },
        expected_qty:{
            type:'NumberArray',
            required:true
        },
        stock_mark:{
            type:'StringArray',
            required:true
        }
    }
};

module.exports = api;