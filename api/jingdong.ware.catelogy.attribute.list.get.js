/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.ware.catelogy.attribute.list.get',
    authorization:false,
    check:{
        newVersion:{
            type:'Number',
            required:true
        },
        catelogyId :{
            type:'String',
            required:true
        },
        client:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;