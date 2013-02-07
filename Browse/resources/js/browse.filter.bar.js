var filter = {
	init: function(){
				
		var btnWidth, contWidth, ctrMarg;
				
		btnWidth= $('.more_filtersbtn').width();
		contWidth = $('#filterbtn').width();
		ctrMarg = (contWidth/2) - (btnWidth/2);
		$('.more_filtersbtn')
			.css(
				{
				 position: 'fixed',
				 marginTop: '-1px',
				 zIndex: 3, 
				 marginLeft: ctrMarg
				});
		},
	open: function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "fast");
		$('#headbar').slideToggle(350);
		$('.more_filtersbtn a').toggle();
		$('.more_filtersbtn').css('marginTop','244px');
		$('.filterbar').switchClass('filterbar', 'filterbar-complete',30);
		$('.filterbar-complete').switchClass('filterbar-complete', 'filterbar',20);
		
		
	},
	close: function(e){
		e.preventDefault();
		$('#headbar').slideToggle(350);
		$('.more_filtersbtn a').toggle();
		$('.more_filtersbtn').css('marginTop','-1px');
		$('.filterbar').switchClass('filterbar', 'filterbar-complete',30);
		$('.filterbar-complete').switchClass('filterbar-complete', 'filterbar',20);
	}
		
}
$(document).ready(function(){
	filter.init();
	var btn;
	
	$('.more_filtersbtn .open').click(function(e){
		filter.open(e);
		});
	$('.more_filtersbtn .close').click(function(e){
		filter.close(e);
		});
	
	$(window).resize(function(){
		filter.init();
	});
		
});

