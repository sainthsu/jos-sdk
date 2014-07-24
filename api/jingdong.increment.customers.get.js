/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.increment.customers.get',
    authorization:false,
    check:{
        pins:{
            type:'StringArray',
            required:false
        },
        pageNo:{
            type:'Number',
            required:false
        },
        pageSize:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;