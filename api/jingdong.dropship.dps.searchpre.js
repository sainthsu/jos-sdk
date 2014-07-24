/**
 * Created by saint on 7/24/14.
 */

var api = {
    method:'jingdong.dropship.dps.searchpre',
    authorization:true,
    check:{
        pageSize:{
            type:'Number',
            required:true
        },
        page:{
            type:'Number',
            required:true
        },
        beginDate:{
            type:'Date',
            required:true
        },
        endDate:{
            type:'Date',
            required:true
        }

    }
};

module.exports = api;