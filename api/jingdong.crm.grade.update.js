/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.crm.grade.update',
    authorization:true,
    check:{
        amount:{
            type:'NumberArray',
            required:true
        },
        count:{
            type:'NumberArray',
            required:true
        }
    }
}

module.exports = api;