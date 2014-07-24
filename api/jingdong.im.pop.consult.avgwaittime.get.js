/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.im.pop.consult.avgwaittime.get',
    authorization:true,
    check:{
        waiter:{
            type:'String',
            required:false
        },
        date:{
            type:'Date',
            required:true
        }
    }
};

module.exports = api;