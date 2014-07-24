/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.ware.selected.province.list.get',
    authorization:false,
    check:{
        client:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;