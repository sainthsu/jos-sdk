/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.logistics.otherOutstore.query',
    authorization:true,
    check:{
        josl_outbound_no:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;