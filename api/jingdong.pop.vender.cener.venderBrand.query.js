/**
 * Created by saint on 7/23/14.
 */

var api = {
    method:'jingdong.pop.vender.cener.venderBrand.query',
    authorization:true,
    check:{
        name:{
            type:'String',
            required:false
        }
    }
}

module.exports = api;