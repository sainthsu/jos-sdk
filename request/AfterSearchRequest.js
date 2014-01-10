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

AfterSearchRequest.prototype.checkParams = function () {
	this.check.forEach(function(cell){
	});
};