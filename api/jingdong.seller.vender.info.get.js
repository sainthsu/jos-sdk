/**
 * Created by saint on 7/23/14.
 */

var api = {
    method:'jingdong.seller.vender.info.get',
    authorization:true,
    check:{
        ext_json_param:{
            type:'String',
            required:false
        }
    }
}

module.exports = api;
