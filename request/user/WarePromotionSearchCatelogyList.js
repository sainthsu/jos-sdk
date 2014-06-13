/**
 * Created by saint on 6/13/14.
 */
var WarePromotionSearchCatelogyList = {
    method:'jingdong.ware.promotion.search.catelogy.list',
    authorizationType:false,
    check:{
        catelogyId:{
            type:'String',
            require:true
        },
        page:{
            type:'Number',
            require:true
        },
        pageSize :{
            type:'Number',
            require:true
        },
        client :{
            type:'String',
            require:true
        }
    }
}
