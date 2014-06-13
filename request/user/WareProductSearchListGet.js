/**
 * Created by saint on 6/13/14.
 */

/*
 sort 1:销量排序 2:价格降序 3:价格升序 4:好评度 6:评论数
 */
var WareProductSearchListGet = {
    method:'jingdong.ware.product.search.list.get',
    authorizationType:false,
    check:{
        isLoadAverageScore:{
          type:'Bool',
          require:true
        },
        isLoadPromotion:{
            type:'Bool',
            require:true
        },
        sort:{
            type:'Number',
            require:true
        },
        page:{
            type:'Number',
            require:true
        },
        pageSize:{
            type:'Number',
            require:true
        },
        keyword:{
            type:'String',
            require:true
        },
        client:{
            type:'String',
            require:true
        }
    }
};