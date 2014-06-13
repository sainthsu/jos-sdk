/**
 * Created by saint on 6/13/14.
 */
var WareCatelogyAttributeListGet = {
    method:'jingdong.ware.product.catelogy.list.get',
    authorizationType:false,
    check:{
        newVersion:{
            type:'Number',
            require:true
        },
        catelogyId :{
            type:'String',
            require:true
        },
        client:{
            type:'String',
            require:true
        }
    }
};
