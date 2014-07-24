/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.ware.product.stock.list.get',
    authorization:false,
    check:{
        skuId :{
            type:'Number',
            required:true
        },
        provinceId:{
            type:'Number',
            required:true
        },
        client:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;