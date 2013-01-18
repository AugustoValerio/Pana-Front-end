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

// jquery.fn.getslides = function(count_slides, current_slide){
  

// }
$(function() {
          var count_slides = $(".features_slide_block").size();
         $(".slider01").carouFredSel({
            responsive: true,
            scroll: { fx: "uncover-fade",
              onBefore: function(direction, nr){
                var dir = direction.scroll.direction; 
                // var indexSlide = $(this).triggerHandler("currentPosition");
                var indexSlide = 1;
                if(dir == 'next'){
                  // console.log(dir + 'slide anterior: '+ (indexSlide-1) +' slide actual:'+ indexSlide +' slide nuevo: '+ (indexSlide + 1)); 
                }else if(dir == 'prev'){
                   // console.log(dir +' slide:'+ (indexSlide - 1));
                }

                console.log(count_slides);
               


                // var prevTitleValue = indexSlide;
                // var nextTitleValue = indexSlide;

                // if ( prevTitleValue < 0 ) { prevTitleValue = 4 } else { prevTitleValue - 1 };
                // if ( nextTitleValue > 4 ) { nextTitleValue = 0 } else { nextTitleValue + 1 };

                // var prevTitle = $(".features_slide_block").eq(prevTitleValue).children("div#title").text();
                // var nextTitle = $(".features_slide_block").eq(nextTitleValue).children("div#title").text();
                // $('#prev_feature_title').empty();
                // $('#prev_feature_title').append(prevTitle);
                // $('#next_feature_title').empty();
                // $('#next_feature_title').append(nextTitle);
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
