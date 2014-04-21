/**
 * Created by Administrator on 14-4-21.
 */
var WareProductCatelogyListGet = {
    method:'jingdong.ware.product.catelogy.list.get',
    check:{
        catelogyId:{
            type:'Number',
            require:true
        },
        level:{
            type:'Number',
            require:true
        },
        isIcon:{
            type:'Bool',
            require:true
        },
        isDescription:{
            type:'Bool',
            require:true
        },
        client:{
            type:'String',
            require:true
        }
    }
};

WareProductCatelogyListGet.prototype.generate = function(){

};
