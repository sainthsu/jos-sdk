/**
 * Created by saint on 7/23/14.
 */

var api = {
    method:'jingdong.ware.product.catelogy.list.get',
    authorization:false,
    check:{
        level:{
            type:'Number',
            required:true
        },
        catelogyId :{
            type:'String',
            required:true
        },
        client:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;