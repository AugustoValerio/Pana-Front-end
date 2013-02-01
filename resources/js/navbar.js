$(document).ready(function() {
	$('#browsebar').waypoint('sticky');
	$('.nav-container').waypoint('sticky',{wrapper: '<div class="sticky-wrapper2" />', offset: 34}	);
 });


$(function() {
  
  var sections = $(".pagesection");
  var navigation_links = $(".pinnav a");

  var arr = [];
  $("section").each(function(index, element){ 
  	arr.push( $(element).attr('id') );
  });
	
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

				case arr[0]:
				$("#fill_nav").animate({'backgroundPosition': '-870px'}, 100, 'swing');
				break;

				case arr[1]:
				$("#fill_nav").animate({'backgroundPosition': '-754px'}, 100, 'swing');
				break;

				case arr[2]:
				$("#fill_nav").animate({'backgroundPosition':'-638px'}, 100, 'swing');
				break;

				case arr[3]:
				$("#fill_nav").animate({'backgroundPosition':'-522px'}, 100, 'swing');
				break;

				case arr[4]:
				$("#fill_nav").animate({'backgroundPosition':'-406px'}, 100, 'swing');
				break;

				case arr[5]:
				$("#fill_nav").animate({'backgroundPosition':'-290px'}, 100, 'swing');
				break;

				case arr[6]:
				$("#fill_nav").animate({'backgroundPosition':'-174px'}, 100, 'swing');
				break;

				case arr[7]:
				$("#fill_nav").animate({'backgroundPosition':'-58px'}, 100, 'swing');
				break;

				case undefined:
				$("#fill_nav").animate({'backgroundPosition':'-870px'}, 100, 'swing');
				break;

			}
			    //console.log(act_sec);

		},
		offset: 94
	});

	$("#fill_nav ul li a").mouseover(function(){
		var value = $(this).attr('href');

		switch(value){

			case '#header':
			$("#fill_nav").animate({'backgroundPosition': '-870px'}, 100, 'swing');
			break;

			case '#'+arr[1]:
			$("#fill_nav").animate({'backgroundPosition': '-754px'}, 100, 'swing');
			break;

			case '#'+arr[2]:
			$("#fill_nav").animate({'backgroundPosition':'-638px'}, 100, 'swing');
			break;

			case '#'+arr[3]:
			$("#fill_nav").animate({'backgroundPosition':'-522px'}, 100, 'swing');
			break;

			case '#'+arr[4]:
			$("#fill_nav").animate({'backgroundPosition':'-406px'}, 100, 'swing');
			break;

			case '#'+arr[5]:
			$("#fill_nav").animate({'backgroundPosition':'-290px'}, 100, 'swing');
			break;

			case '#'+arr[6]:
			$("#fill_nav").animate({'backgroundPosition':'-174px'}, 100, 'swing');
			break;

			case '#'+arr[7]:
			$("#fill_nav").animate({'backgroundPosition':'-58px'}, 100, 'swing');
			break;

			case undefined:
			$("#fill_nav").animate({'backgroundPosition':'-870px'}, 100, 'swing');
			break;
		}
		
	}).mouseout(function(){

		switch(act_sec){

			case undefined:
			$("#fill_nav").animate({'backgroundPosition': '-870px'}, 100, 'swing');
			break;

			case arr[1]:
			$("#fill_nav").animate({'backgroundPosition': '-754px'}, 100, 'swing');
			break;

			case arr[2]:
			$("#fill_nav").animate({'backgroundPosition':'-638px'}, 100, 'swing');
			break;

			case arr[3]:
			$("#fill_nav").animate({'backgroundPosition':'-522px'}, 100, 'swing');
			break;

			case arr[4]:
			$("#fill_nav").animate({'backgroundPosition':'-406px'}, 100, 'swing');
			break;

			case arr[5]:
			$("#fill_nav").animate({'backgroundPosition':'-290px'}, 100, 'swing');
			break;

			case arr[6]:
			$("#fill_nav").animate({'backgroundPosition':'-174px'}, 100, 'swing');
			break;

			case arr[7]:
			$("#fill_nav").animate({'backgroundPosition':'-58px'}, 100, 'swing');
			break;

		}
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


