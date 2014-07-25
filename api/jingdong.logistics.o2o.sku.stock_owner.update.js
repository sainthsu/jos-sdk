/**
 * Created by saint on 7/25/14.
 */


var api = {
    method:'jingdong.logistics.o2o.sku.stock_owner.update',
    authorization:true,
    check:{
        spu_id:{
            type:'Number',
            required:true
        },
        sku_id:{
            type:'NumberArray',
            required:true
        },
        name:{
            type:'StringArray',
            required:true
        },
        stock_owner:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;