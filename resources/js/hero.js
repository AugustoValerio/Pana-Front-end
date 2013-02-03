$(function() {

   var docHeight = $(document).height();
$(".overviewbut").click(function(){
   $("body").append("<div id='overlay'></div>");

   $("#overlay")
      .height(docHeight)
      .css({
      	 'opacity': '0.9',
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': '#3b3b3b',
         'width': '100%',
         'z-index': 999999
      });
    $("#heroshuttle").css({'display':'block'});
    $("#heroshuttle").animate({ opacity: 1 }, 1000, function() {
    // Animation complete. 
    });
    
   });

$("#closehero").click(function(){
  
    $("#heroshuttle").css({'display':'none'});
    $('#overlay').remove();
   });   
   
});