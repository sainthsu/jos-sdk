/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.pop.afs.refundapply.querybyid',
    authorization:true,
    check:{
        ra_id:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;