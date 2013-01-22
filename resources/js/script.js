$(document).ready(function(){

	$(".btn-slide").click(function(){
	  $("#navmenucat .hide").slideToggle("slow");
	  $(".btn-slide").toggleClass("active");
	  $("#browsebar").toggleClass("hidden");
	  $(".sticky-wrapper").toggleClass("hidden");
	});

  $(".btn-fooslide").click(function(){
    $("#foo_navmenu .hide").slideToggle("slow");
    $(this).toggleClass("active foonavactive");
  });

  $('.fancybox').fancybox({
    scrolling: 'no'
  });

  $('.firmware_procedures').jScrollbar();

});

$(function(){  
	$('.rcnttm a').aToolTip({  
        fixed: true  
    });
}); 

$(function() {
    $( ".tabs" ).tabs();
});
    
/* nav menu drop down */    
$(function(){
    $('#navmenucats').liquidSlider({
        autoSlide:false,
        autoHeight:false,
        crossLinks: true,
        dynamicTabs: false,
        dynamicArrows: false,
        slideEaseDuration: 0,
        preloader: true,
        preloaderFadeOutDuration: 250
    });

});

$(document).ready(function(){

	var specs_links = $("#dimimg a");
	
	$('#dimimg a').on({
	    'click': function(){
		    var active_img = $(this).attr("href");
	        $('#dimimg img').attr('src', active_img);
	        specs_links.removeClass("selected");
			$(this).addClass("selected");
	        return false;
	    } 
	});
});

$(function() {
          var count_slides = $(".features_slide_block").size();
          var prevTitle = $(".features_slide_block").eq((count_slides-1)).attr("title");
          var nextTitle = $(".features_slide_block").eq(1).attr("title");
          $('#prev_feature_title').append(prevTitle);
          $('#next_feature_title').append(nextTitle);

         $(".slider01").carouFredSel({
            responsive: true,
            scroll: { 
              fx: "uncover-fade",
              onAfter: function(direction){
                var dir = direction.scroll.direction; 
                var indexSlide = $(this).triggerHandler("currentPosition");
                var prevTitle = $(".features_slide_block").eq((count_slides-1)).attr("title");
                var nextTitle = $(".features_slide_block").eq(1).attr("title");
                $('#prev_feature_title').empty();
                $('#next_feature_title').empty();
                $('#prev_feature_title').append(prevTitle);
                $('#next_feature_title').append(nextTitle);
              }
            },
            items: { visible: 1, width: 976, height: "auto" },
            pagination: { container: "#fpaginator", keys: true },
            prev: { button: "#prev_features" },
            next: { button: "#next_features" },
            auto: false
          });

         $(".slider02").carouFredSel({
            responsive: true,
            scroll: { fx: "uncover-fade" },
            items: { visible: 1, width: 640, height: "auto" },
            pagination: { container: "#pagi", keys: true },
            prev: '#prev_samples',
            next: '#next_samples',
            auto: false
          });

         $(".slider03").carouFredSel({
            responsive: true,
            scroll: { fx: "uncover-fade" },
            items: { visible: 1, width: 400, height: "auto" },
            pagination: { container: "#rpaginator", keys: true },
            prev: '#prev_reviews',
            next: '#next_reviews',
            auto: false
          });

         $(".slider04").carouFredSel({
            responsive: true,
            scroll: { items: 1, easing: "elastic", duration: 500 },
            items: { visible: { min: 1, max: 4 }, width: 180, height: "auto" },
            pagination: { container: "#apaginator", keys: true },
            prev: '#prev_acceso',
            next: '#next_acceso',
            auto: false
          });
          
          $(".heroslider").carouFredSel({
            responsive: false,
            scroll: { items: 1, easing: "elastic", duration: 500 },
            items: { visible: { min: 1, max: 1 }, width: 498, height: 378 },
            pagination: { container: "#hpaginator", keys: true },
            prev: '#prev_heros',
            next: '#next_heros',
            auto: false
          });

        $('.countrydp').dropkick();
        $('.countryldp').dropkick();
        setThumnail();

});

$(function(){
	
	$(window).resize(function(){
		setThumnail();
	});
	
	 
});

 function setThumnail(){
	
	var thumbLength, pagiA, thumImg;
	
	pagiA = $('#pagi a');
	thumbLength = pagiA.length;
	$('#pagi a span').hide();
	setTimeout(function(){	
		
		for(var x=0; x<thumbLength; x++ ){
			$('#pagi a').eq(x).children().remove();
			thumImg = $('#thumbnail').children().eq(x).clone();
			$('#pagi a').eq(x).append(thumImg);
		}
		$('#pagi .selected img').addClass('slide-option-selected');
		$('#pagi').css('margin-top','45');
	},100);
	
	$('#next_samples , #prev_samples, #pagi a').click(function(){
		$('#pagi a img').removeClass('slide-option-selected');
		$('#pagi .selected img').addClass('slide-option-selected');
	});
	
	
}

$('.score').raty({
  score: function() {
    return $(this).attr('data-rating');
  },
  path: 'resources/images/raty/img/'
});
