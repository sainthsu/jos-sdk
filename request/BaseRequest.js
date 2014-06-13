/**
 * Created by Saint on 14-4-21.
 */
var BaseRequest = {
    getMethod:function () {
        return this.method;
    },
    checkParams:function (apiParams) {
        var params = apiParams;
        this.check.forEach(function(element){
            if(element.equal('require'))
            {
                if(params[element] === undefined)
                {
                    return new Error("apiParams:"+element+"which needed is undefined;");
                }
            }
        });
    }
};

module.exports=new BaseRequest();