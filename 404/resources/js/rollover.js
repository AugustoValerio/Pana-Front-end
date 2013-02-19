$(function(){
	init();
});

function init(){
	$(".acceslider .slide").mouseover(function(){
		$(this).css({"background":"#ededed"});
		$(this).find("h2").css({"color":"#00A0C6"});
		$(this).find("p").css({"color":"#00A0C6"});
		
	}).mouseout(function(){
		$(this).css({"background":"#fcfcfc"});
		$(this).find("h2").css({"color":"#1F1F1F"});
		$(this).find("p").css({"color":"#1F1F1F"});
	});

	$(".access_more_slide_block").mouseover(function(){
		$(this).css({"background":"#ededed"});
		$(this).find("div").css({"color":"#00A0C6"});
	}).mouseout(function(){
		$(this).css({"background":"#fcfcfc"});
		$(this).find("div").css({"color":"#1F1F1F"});
	});
	
}