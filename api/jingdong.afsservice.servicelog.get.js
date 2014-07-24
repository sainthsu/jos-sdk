/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.afsservice.servicelog.get',
    authorization:true,
    check:{
        afsServiceId:{
            type:'Number',
            required:true
        },
        pageNumber:{
            type:'Number',
            required:true
        },
        pageSize:{
            type:'Number',
            required:true
        }
    }
};

module.exports = api;