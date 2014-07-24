/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.kuaiche.zn.plan.search.modify',
    authorization:true,
    check:{
        plan_info:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;