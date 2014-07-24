/**
 * Created by saint on 7/24/14.
 */
var api = {
    method:'jingdong.ware.promotionInfo.get',
    authorization:false,
    check:{
        skuId :{
            type:'String',
            required:true
        },
        webSite :{
            type:'Number',
            required:true
        },
        origin :{
            type:'Number',
            required:true
        }
    }
}

module.exports = api;