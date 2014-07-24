/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.kuaiche.goods.get',
    authorization:true,
    check:{
        sku_id:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;