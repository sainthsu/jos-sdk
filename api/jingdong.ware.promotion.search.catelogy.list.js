/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.ware.promotion.search.catelogy.list',
    authorization:false,
    check:{
        catelogyId :{
            type:'String',
            required:true
        },
        page :{
            type:'Number',
            required:true
        },
        pageSize :{
            type:'Number',
            required:true
        },
        client:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;