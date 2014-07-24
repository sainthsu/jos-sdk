/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.ware.product.search.list.get',
    authorization:false,
    check:{
        isLoadAverageScore :{
            type:'Boolean',
            required:true
        },
        isLoadPromotion:{
            type:'Boolean',
            required:true
        },
        sort :{
            type:'Number',
            required:true
        },
        page :{
            type:'Number',
            required:true
        },
        pageSize:{
            type:'Number',
            required:true
        },
        keyword:{
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