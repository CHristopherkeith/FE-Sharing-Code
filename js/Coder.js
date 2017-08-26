var Coder = function(coderConfig){
	this.coderId = coderConfig.coderId;
	this.language = coderConfig.language;
}
Coder.prototype = {
	alertSth: function(){
		alert('coding '+this.language+'!');
	},
	finishTask: function(){
		$('#'+this.coderId).children('input').val('finish coding '+this.language+'!')
	}
}