/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.ware.bookbigfield.get',
    authorization:false,
    check:{
        sku_id :{
            type:'NumberArray',
            required:true
        }
    }
}

module.exports = api;