/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.ware.productbigfield.get',
    authorization:false,
    check:{
        sku_id:{
            type:'String',
            required:true
        },
        field:{
            type:'StringArray',
            required:true
        }
    }
}

module.exports = api;