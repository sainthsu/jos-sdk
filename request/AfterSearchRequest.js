/**
 * New node file
 */
var AfterSearchRequest = {
		method:'360buy.after.search',
		check:{
			select_fields:"",
			page:'',
			page_size:'',
			query_fields:''
		}
};

AfterSearchRequest.prototype.getMethod = function (){
	return this.method;
};

AfterSearchRequest.prototype.checkParams = function (apiParams) {

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
};

module.exports = AfterSearchRequest;