$(document).ready(function() {
	$('#browsebar').waypoint('sticky');
	$('.nav-container').waypoint('sticky',{wrapper: '<div class="sticky-wrapper2" />', offset: 34}	);
 });


$(function() {

  var sections = $(".pagesection");
  var navigation_links = $(".pinnav a");
  $("section").each(function(index, element){ console.log( $(element).attr('id') )});
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('.pinnav a[href="#' + active_section.attr("id") + '"]');
			//navigation_links.removeClass("selected");
			//active_link.addClass("selected");
			active_link.toggleClass("selected");

			var act_sec = active_section.closest('section').attr('id');
			switch(act_sec){
				case 'features':
				$("#fill_nav").animate({'backgroundPosition': '-600px'}, 100, 'swing');
				break;

				case 'techspecs':
				$("#fill_nav").animate({'backgroundPosition':'-470px'}, 100, 'swing');
				break;

				case 'samples':
				$("#fill_nav").animate({'backgroundPosition':'-340px'}, 100, 'swing');
				break;

				case 'reviews':
				$("#fill_nav").animate({'backgroundPosition':'-210px'}, 100, 'swing');
				break;

				case 'accessories':
				$("#fill_nav").animate({'backgroundPosition':'-80px'}, 100, 'swing');
				break;

				case 'support':
				$("#fill_nav").animate({'backgroundPosition':'-0px'}, 100, 'swing');
				break;

				case undefined:
				$("#fill_nav").animate({'backgroundPosition':'-700px'}, 100, 'swing');
				break;

			}
			 // console.log(act_sec);

		},
		offset: '10%'
	});

	$("#fill_nav ul li a").mouseover(function(){
		//console.log($(this).attr('href'));
	});
	
navigation_links.click( function(event) {

		$.scrollTo(
			$(this).attr("href"),
			{
				duration: 200,
				easing: 'swing',
				offset: { 'left':0, 'top':-0.10*$(window).height() }
			}
		);
	});

	//$("section").each(function(index, element){ console.log( $(element).height() )});
	//$(".pinnav li").each(function(index, element){ console.log( $(element).width() ) })

});

var bar = $('#pinnav'),
    $window = $(window),
    docHeight = $(document).height(),
    baseX = $window.height() / docHeight * 130;

// bar.css('background', '-webkit-linear-gradient(30deg, #00a0c6 '+ baseX +'%, #434343 '+ baseX +'%)');
// bar.css('background', '-moz-linear-gradient(64deg, #00a0c6 '+ baseX +'%, #434343 '+ baseX +'%)');
// bar.css('background', '-ms-linear-gradient(64deg, #00a0c6 '+ baseX +'%, #434343 '+ baseX +'%)');
// bar.css('background', 'linear-gradient(64deg, #00a0c6 '+ baseX +'%, #434343 '+ baseX +'%)');
// bar.css('-pie-background', 'linear-gradient(30deg, #00a0c6 '+ baseX +'%, #434343 '+ baseX +'%)');

// $window.scroll(function(e) {
//     var x = $window.scrollTop() / docHeight * 275 + baseX;
//     bar.css('background', '-webkit-linear-gradient(30deg, #00a0c6 '+ x +'%, #434343 '+ x +'%)');
//     bar.css('background', '-moz-linear-gradient(64deg, #00a0c6 '+ x +'%, #434343 '+ x +'%)');
//     bar.css('background', '-ms-linear-gradient(64deg, #00a0c6 '+ x +'%, #434343 '+ x +'%)');
//     bar.css('background', 'linear-gradient(64deg, #00a0c6 '+ x +'%, #434343 '+ x +'%)');
//     bar.css('-pie-background', 'linear-gradient(30deg, #00a0c6 '+ x +'%, #434343 '+ x +'%)');
//     console.log(window.globalvar);
// });


