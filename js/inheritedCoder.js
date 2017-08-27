var Coder = function(coderConfig){
	this.coderId = coderConfig.coderId;
	this.language = coderConfig.language;
}
Coder.prototype = {
	alertSth: function(feeling1,feeling2){
		alert('coding '+this.language+'!');
		if(feeling1&&feeling2){
			alert(feeling1+' and '+feeling2)
		}
	},
	finishTask: function(){
		$('#'+this.coderId).children('input').val('finish coding '+this.language+'!')
	}
}
Coder.yourWish = function(){
	console.log('%cJoin Google :)','color: #e5bd9c;font-size: 20px;font-weight: bolder;');
}