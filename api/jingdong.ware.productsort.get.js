
var api = {
    method:'jingdong.ware.productsort.get',
    authorization:false,
    check:{
        product_sort_ids :{
            type:'NumberArray',
            required:true
        }
    }
}

module.exports = api;