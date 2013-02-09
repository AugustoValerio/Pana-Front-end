var checkbox = {
	init: function(){
		checkbox.toggle();
	},
	toggle: function(){
		
		$('.check_list li a').click(function(e){

			var target = $(this).parent();
			if(!target.children('a').hasClass('disabled') ){
				if(target.children('a').hasClass('uncheck')){
					target.children('a').removeClass('uncheck');
					target.children('a').addClass('checked');
					target.children('input').val('true');
					target.children('input').attr("checked", true);
				}
				else{
					target.children('a').removeClass('checked');
					target.children('a').addClass('uncheck');
					target.children('input').val('false');
					target.children('input').attr("checked", false);
				}
			}
			
				
		});
	}
}
$(document).ready(function(){
	
	checkbox.init();
});