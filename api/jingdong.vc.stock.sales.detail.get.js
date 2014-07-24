/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.vc.stock.sales.detail.get',
    authorization:true,
    check:{
        product_code:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;