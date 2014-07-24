/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.kuaiche.zn.bid.rank.get',
    authorization:true,
    check:{
        plan_json:{
            type:'String',
            required:false
        },
        cid:{
            type:'Number',
            required:false
        },
        kwg_id:{
            type:'Number',
            required:false
        },
        plan_date:{
            type:'String',
            required:false
        }

    }
};

module.exports = api;