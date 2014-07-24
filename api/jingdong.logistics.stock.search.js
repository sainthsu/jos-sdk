/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.logistics.stock.search',
    authorization:true,
    check:{
        warehouse_no:{
            type:'String',
            required:false
        },
        goods_no:{
            type:'String',
            required:false
        },
        current_page:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;