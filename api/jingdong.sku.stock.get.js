/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.sku.stock.get',
    authorization:false,
    check:{
        sku_id :{
            type:'Number',
            required:true
        },
        area_id:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;