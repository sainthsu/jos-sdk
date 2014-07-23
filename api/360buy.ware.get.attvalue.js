/**
 * Created by saint on 7/23/14.
 */
var api = {
    method:"360buy.ware.get.attvalue",
    authorization:true,
    check:{
        avs:{
            type:'String',
            required:true
        },
        fields:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;
