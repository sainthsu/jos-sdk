/**
 * Created by saint on 7/25/14.
 */

var api = {
    method:'jingdong.market.service.qt.report.delete',
    authorization:true,
    check:{
        qtCode:{
            type:'String',
            required:true
        }
    }
};

module.exports = api;