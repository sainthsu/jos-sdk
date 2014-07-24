/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.po.detail.page.get',
    authorization:true,
    check:{
        orderId:{
            type:'Number',
            required:true
        },
        sortFiled:{
            type:'String',
            required:false
        },
        sortMode:{
            type:'String',
            required:false
        },
        pageIndex:{
            type:'Number',
            required:true
        },
        pageSize:{
            type:'Number',
            required:true
        }

    }
};

module.exports = api;