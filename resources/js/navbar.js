$(function() {
  // Do our DOM lookups beforehand
  var nav_container = $(".nav-container");
  
  nav_container.waypoint({
    handler: function(event, direction) {
       nav_container.toggleClass('sticky', direction=='down');
    }
  });
  var sections = $("#sections section");
	var navigation_links = $("nav.pinnav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('nav.pinnav a[href="#' + active_section.attr("id") + '"]');
			
			active_link.toggleClass("selected");
			

		},
		offset: '25%'
	})
	
	
	navigation_links.click( function(event) {

		$.scrollTo(
			$(this).attr("href"),
			{
				duration: 200,
				offset: { 'left':0, 'top':-0.15*$(window).height() }
			}
		);
	});
});
$(function() {
  // Do our DOM lookups beforehand
  var nav = $("#browsebar");
  var placeh = $(".placeholderb");
  nav.waypoint({
    handler: function(event, direction) {
       nav.toggleClass('sticky', direction=='down');
       placeh.toggleClass('on', direction=='down')
    }
  });
});
