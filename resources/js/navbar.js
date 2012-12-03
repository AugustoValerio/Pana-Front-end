$(function() {

	var nav_container = $(".nav-container");
	var nav = $(".nav-container div");
	
	var top_spacing = 0;
	var waypoint_offset = 50;

	nav_container.waypoint({
		handler: function(event, direction) {
			
			if (direction == 'down') {
			
				nav_container.css({ 'height':nav.outerHeight() });		
				nav.stop().addClass("sticky").css("top",-nav.outerHeight()).animate({"top":top_spacing});

				
			} else {
			
				nav_container.css({ 'height':'auto' });
				nav.stop().removeClass("sticky").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});
				
			}
			
		},
		offset: function() {
			return -nav.outerHeight()-waypoint_offset;
		}
	});
	
	var sections = $("section");
	var navigation_links = $("nav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);

			if (direction === "UP") active_section = active_section.prev();

			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			//navigation_links.removeClass("selected");
			active_link.addClass("selected");

			// if($("nav a").attr("chapter") < active_link){
			// 	$(this).removeClass("selected");
			// }

			// if(direction === "up"){
			// 	active_section = active_section.prev();
			// 	active_link.removeClass("selected");
			// }

			//var test = $(active_link).attr("chapter");
			//alert(test);

			// if (direction === "up"){
			// 	active_section = active_section.prev();
			// 	var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			// 	active_link.addClass("selected");
			// }else{
			// 	navigation_links.removeClass("selected");
			// }


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