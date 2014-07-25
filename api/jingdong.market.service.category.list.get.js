/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.market.service.category.list.get',
    authorization:false,
    check:{
        cid:{
            type:'Number',
            required:false
        }
    }
};

module.exports = api;