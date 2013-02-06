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
    
    $("#heroshuttle").fadeToggle("slow", "linear");
    
   });

$("#closehero").click(function(){
  
    $("#heroshuttle").fadeToggle("slow", "linear");
    $('#overlay').remove();
   });   
   
});