$(document).ready(function(){

	$(".btn-slide").click(function(){
	  $("#navmenucat .hide").slideToggle("slow");
	  $(".btn-slide").toggleClass("active");
	  $("#browsebar").toggleClass("hidden");
	  $(".sticky-wrapper").toggleClass("hidden");
	});
	
	$("#browsebot .blubot").click(function(){
	  $("#buypanel").toggleClass("on");
	  return false;
	});

  $(".btn-fooslide").click(function(){
    $("#foo_navmenu .hide").slideToggle("slow", function(){
		
	});
    $(".btn-fooslide").toggleClass("active foonavactive");
	var countryPosition = $(document).height();
	$('html, body').animate({
	    scrollTop: $("#foo_navmenu").offset().top
	 }, 1000);
	
    return false;
  });
  
  $(".contactslide").click(function(){
    $("#contactpanel").slideToggle("slow");
    $(".contactslide").toggleClass("active foonavactive");
    return false;
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
$(function(){  
	$('#spcsimgs a').aToolTip({  
        fixed: true,
        toolTipClass: 'specsTooltip',   // Set class name for custom theme/styles  
        xOffset: -40,                     // x position  
        yOffset: 60
    });
});

$(function() {
    $( ".tabs" ).tabs({
        fx: { 
            opacity: 'toggle' 
        }
    });
});

// nav menu cats
$(document).ready(function(){

		var nav_iteam = $("#navmenucats .parbase");
		var active_child = $('.headerpanelsubcategory .categoryElement');
		var product_text = $(".link-products").text();
		
		$('#navmenucats .parrays > .parbase > .parbase > a').on({'click': function(){
			    var active_cat = $(this).attr("title");
			    var active_cont = $(this).parent('div').nextAll('.headerpanelsubcategory');
			    
		        $('.inbread').html('<span><a href="#" class="maincat">' + product_text + '</a>  > <span class="subcat"> ' + active_cat + '</span></span>');	
		        $('.inbread').attr('title', active_cat);
		        nav_iteam.hide();
				active_cont.fadeIn();
				active_cont.css({'display': 'inline-block'});
				$(this).parent('div').addClass("show");
				$(this).parent('div').parent('div').addClass('show');
				active_child.addClass("on");
		        return false; 
		  }
		  
		});
		
		$('#navmenucats .headerpanelsubcategory .categoryElement > a').on({'click': function(){
				var active_parent = $(".show .categoryElement a").attr("title");
				var active_cat = $(this).attr("title");
			    var active_cont_b = $(this).parent('div').nextAll('.headerpanelelement');
			    var active_cont_b = $(this).parent('div').nextAll('.headerpanelelement');
			    
			    nav_iteam.hide();
				active_cont_b.fadeIn();
				active_cont_b.addClass('onp');
				$(this).parent('div').parent('div').removeClass('show');
				$(this).parent('div').parent('div').addClass('showed');
				active_child.removeClass("on")
				$('.inbread').html('<span><a href="#" class="maincat">' + product_text + '</a>  > <a href="#" class="subcat"> ' + active_parent + '</a> > <span class="lastp">' + active_cat + ' </span></span>');
		        return false;
		        
		  }
		});
		$('.inbread').on('click', 'a.maincat', function() {
			    nav_iteam.hide();
			    nav_iteam.removeClass('onp');
			    active_child.removeClass("on");
			   $(".headerpanelcategory").removeClass("show");
			   $(".headerpanelsubcategory").removeClass("showed");
			   $(".headerpanelcategory .categoryElement").removeClass("show");
			   $(".headerpanelcategory").fadeIn();
			   $(".headerpanelcategory").css({'display': 'inline-block'});
			   $(".headerpanelcategory .categoryElement").fadeIn();
			   $(".headerpanelcategory .categoryElement").css({'display': 'inline-block'});
			   $('.inbread').html('<span>' + product_text + '</a>  > </span>');
			   return false;
		  });
		  $('.inbread').on('click', 'a.subcat', function() {
			    nav_iteam.hide();
			    nav_iteam.removeClass('onp');
			   $(".show .headerpanelsubcategory").removeClass("showed");
			   $(".headerpanelcategory.show .headerpanelsubcategory").fadeIn();
			   $(".headerpanelcategory.show .headerpanelsubcategory .categoryElement").fadeIn();
			   $(".headerpanelcategory.show .headerpanelsubcategory .categoryElement").css({'display': 'inline-block'});
			   $('.lastp').remove();
			   return false;
		  });
});
// end nav menu cats

$(document).ready(function(){

	var specs_links = $("#dimimg a");
	
	$('#dimimg a').on({
	    'click': function(){
          var active_img = $(this).attr("href");
          $('#dimimg img').fadeOut('slow', function(){
            $('#dimimg img').attr('src', active_img);
            $('#dimimg img').fadeIn('slow');
          });
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
            scroll: { easing:"linear",duration:500 },
            items: { visible: 1, width: 640, height: "auto" },
            pagination: { container: "#pagi", keys: true },
            prev: {button:'#prev_samples'},
            next: {button:'#next_samples'},
            auto: false
          });

         $(".slider03").carouFredSel({
            responsive: true,
            scroll: { easing:"linear",duration:500 },
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
            scroll: { items: 1 },
            items: { visible: { min: 1, max: 1 }, width: 498, height: 378 },
            pagination: { container: "#hpaginator", keys: true },
            prev: '#prev_heros',
            next: '#next_heros',
            auto: false
          });

        $('.countrydp').dropkick();
        $('.countryldp').dropkick();
       

});



$(function(){
  
  $('.score').raty({
    score: function() {
      return $(this).attr('data-rating');
    },
    path: 'resources/images/raty/'
  });
   
});


