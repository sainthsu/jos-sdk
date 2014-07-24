/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.kuaiche.zn.plan.search.keyword.delete',
    authorization:true,
    check:{
        plan_id:{
            type:'Number',
            required:true
        },
        keyword_ids:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;