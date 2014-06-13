/**
 * Created by saint on 6/13/14.
 */
var WareSkuSearchListGet = {
    method:'jingdong.ware.sku.search.list.get',
    authorizationType:false,
    check:{
        skuId:{
            type:'Number',
            require:true
        },
        client:{
            type:'String',
            require:true
        }
    }
};