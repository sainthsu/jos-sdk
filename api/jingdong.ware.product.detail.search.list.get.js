/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.ware.product.detail.search.list.get',
    authorization:false,
    check:{
        skuId :{
            type:'Number',
            required:true
        },
        isLoadWareScore :{
            type:'Boolean',
            required:true
        },
        client:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;