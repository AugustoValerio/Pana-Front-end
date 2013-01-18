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

$(function() {

         $(".slider01").carouFredSel({
            responsive: true,
            scroll: { fx: "uncover-fade"},
            items: { visible: 1, width: 976, height: "auto" },
            pagination: { container: "#fpaginator", keys: true },
            prev: '#prev_features',
            next: '#next_features',
            auto: false
          });

         $(".slider02").carouFredSel({
            responsive: true,
            scroll: { fx: "uncover-fade" },
            items: { visible: 1, width: 640, height: "auto" },
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

        $('.countrydp').dropkick();
        $('.countryldp').dropkick();

      });

$(function(){
	$('.pagi li a img').click(function () {
	 $('.pagi li a img').removeClass('slide-option-selected');	
     $(this).addClass('slide-option-selected');
    });
});

    $('.score').raty({
      score: function() {
        return $(this).attr('data-rating');
      },
      path: 'resources/images/raty/img/'
    });