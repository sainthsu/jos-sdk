/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.kuaiche.zn.plan.detail.get',
    authorization:true,
    check:{
        plan_id:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;