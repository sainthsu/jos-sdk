/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.logistics.sku.query',
    authorization:true,
    check:{
        josl_good_no:{
            type:'String',
            required:false
        },
        isv_good_no:{
            type:'String',
            required:false
        }
    }
};

module.exports = api;