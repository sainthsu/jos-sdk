/**
 * Created by saint on 6/13/14.
 */
var WareProductStockListGet = {
    method:'jingdong.ware.product.stock.list.get',
    authorizationType:false,
    check:{
        skuId:{
            type:'Number',
            require:true
        },
        provinceId :{
            type:'Number',
            require:true
        },
        client:{
            type:'String',
            require:true
        }
    }
};
