/**
 * Created by saint on 7/25/14.
 */
var api = {
    method:'jingdong.vc.get.return.order.detail',
    authorization:true,
    check:{
        returnId:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;