/**
 * Created by saint on 7/24/14.
 */


var api = {
    method:'jingdong.ware.buytobuy.list.get',
    authorization:false,
    check:{
        wareId :{
            type:'Number',
            required:true
        },
        client: {
            type:'String',
            required:true
        }
    }
}

module.exports = api;