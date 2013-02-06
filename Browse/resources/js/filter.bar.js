var filter = {
	init: function(){
				
		var btnWidth, contWidth, ctrMarg;
				
		btnWidth= $('.more_filtersbtn').width();
		contWidth = $('#filterbtn').width();
		ctrMarg = (contWidth/2) - (btnWidth/2);
		$('.more_filtersbtn')
			.css(
				{
				 position: 'absolute',
				 marginTop: '-13px',
				 marginLeft: ctrMarg
				});
		},
	click: function(e){
		e.preventDefault();
		$('#browse_headbar').slideToggle(300);
		$('.more_filtersbtn a').toggle();
		$('.browse_filterbar').switchClass('browse_filterbar', 'browse_filterbar-complete',50);
		$('.browse_filterbar-complete').switchClass('browse_filterbar-complete', 'browse_filterbar',50);
		
		
	}
		
}
$(document).ready(function(){
	filter.init();
	var btn;
	
	$('.more_filtersbtn a').click(function(e){
		filter.click(e);
		});
	
	$(window).resize(function(){
		filter.init();
	});
		
});

