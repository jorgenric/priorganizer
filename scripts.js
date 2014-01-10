

var priorganize = (function(window, document, $){

	default_settings = {prop1:"one"};

	//constructor
	priorganize = function(options){

		$.extend(default_settings, options);
		
		aprop = 'a property value';
		

	}

	priorganize.prototype.get_aprop = function(){
		console.log(aprop);
	}
	
	priorganize.prototype.write_settings = function(){
		console.log(default_settings);
	}
	
	return priorganize;
	
})(window, document, jQuery);


function test(){
	alert("Hey dummy");

}