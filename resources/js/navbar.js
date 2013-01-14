$(document).ready(function() {
	$('#browsebar').waypoint('sticky');
	$('.nav-container').waypoint('sticky',{wrapper: '<div class="sticky-wrapper2" />', offset: 34}	); });


$(function() {

  var sections = $(".pagesection");
  var navigation_links = $(".pinnav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('.pinnav a[href="#' + active_section.attr("id") + '"]');
			//navigation_links.removeClass("selected");
			//active_link.addClass("selected");
			active_link.toggleClass("selected");

		},
		offset: '10%'
	})
	
	
	navigation_links.click( function(event) {

		$.scrollTo(
			$(this).attr("href"),
			{
				duration: 200,
				offset: { 'left':0, 'top':-0.10*$(window).height() }
			}
		);
	});


});

var bar = $('#pinnav'),
    $window = $(window),
    docHeight = $(document).height(),
    baseX = $window.height() / docHeight * 130;

bar.css('background', '-webkit-linear-gradient(30deg, #00a0c6 '+ baseX +'%, #434343 '+ baseX +'%)');
bar.css('background', '-moz-linear-gradient(64deg, #00a0c6 '+ baseX +'%, #434343 '+ baseX +'%)');
bar.css('background', '-ms-linear-gradient(64deg, #00a0c6 '+ baseX +'%, #434343 '+ baseX +'%)');
bar.css('background', 'linear-gradient(64deg, #00a0c6 '+ baseX +'%, #434343 '+ baseX +'%)');

$window.scroll(function(e) {      
    var x = $window.scrollTop() / docHeight * 185 + baseX;
    bar.css('background', '-webkit-linear-gradient(30deg, #00a0c6 '+ x +'%, #434343 '+ x +'%)');
    bar.css('background', '-moz-linear-gradient(64deg, #00a0c6 '+ x +'%, #434343 '+ x +'%)');
    bar.css('background', '-ms-linear-gradient(64deg, #00a0c6 '+ x +'%, #434343 '+ x +'%)');
    bar.css('background', 'linear-gradient(64deg, #00a0c6 '+ x +'%, #434343 '+ x +'%)');
});