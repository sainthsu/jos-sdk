/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.market.charge.cycle.list.get',
    authorization:false,
    check:{
        item_code:{
            type:'String',
            required:false
        },
        item_id:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;