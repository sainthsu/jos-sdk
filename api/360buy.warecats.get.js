/**
 * Created by saint on 7/23/14.
 */
var api = {
    method:'360buy.warecats.get',
    authorization:true,
    check:{
        fields:{
            type:'String',
            required:true
        }
    }
}

module.exports = api;
