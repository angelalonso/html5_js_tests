var app_type = {};
jQuery.getJSON('config.cfg',function(data){
	
	$.each(data, function(){
		app_type = this.app_type;
	});
});
$(document).ready(function() {
    $('#Name').val(app_type);
});
