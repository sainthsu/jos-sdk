/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.ware.baseproduct.get',
    authorization:false,
    check:{
        ids :{
            type:'NumberArray',
            required:true
        },
        base:{
            type:'StringArray',
            required:true
        }
    }
}

module.exports = api;