$(function(){
	init();
});

function init(){
	check = false;
	align_circles();
	$(".box_results").mouseenter(function(){
		$(this).css({"background":"url(resources/images/browse/bg_box_over.jpg)"});
		$(this).find(".text_camera_results h2").css({"color":"#00a0c6"});
		$(this).find(".text_camera_results").css({"color":"#00a0c6"});
		$(this).find(".im1").animate({"left":"-220px"},500);
		$(this).find(".im2").animate({"left":"0px"},500);
	}).mouseleave(function(){
		$(this).css({"background":"#f9f9f9"});
		$(this).find(".text_camera_results h2").css({"color":"#1f1f1f"});
		$(this).find(".text_camera_results").css({"color":"#1f1f1f"});
		$(this).find(".im1").animate({"left":"0px"},500);
		$(this).find(".im2").animate({"left":"220px"},500);
	});
	var old;
	var now;
	first_time = true;
	cont = 0;
	$(".button_comare").hide();
	$(".arrow_compare").hide();
	$(".check_compare").click(function(){
		if(first_time){
			$(this).addClass("activo");
			first_time = false;
			cont = 1;

			$(this).css({"background":"url(resources/images/browse/check_compare_results.png) 5px 0 no-repeat"});
			$("#browse_browsebar .container ul").append('<li class="box_compare_container" id='+ $(this).parent().find("img").attr("id") +'><img src='+ $(this).parent().find("img").attr("src") +' alt=""></li>');
			//$("#browse_browsebar .container").append('<div class="arrow_compare"></div>');
		}else{
				//alert($(this).hasClass("activo"));
			if(!$(this).hasClass("activo")){
				cont++;
				$(this).addClass("activo");
				$(this).css({"background":"url(resources/images/browse/check_compare_results.png) 5px 0 no-repeat"});
				$("#browse_browsebar .container ul").append('<li class="box_compare_container" id='+ $(this).parent().find("img").attr("id") +'><img src='+ $(this).parent().find("img").attr("src") +' alt=""></li>');
			}else{
				cont--;
				$(this).removeClass("activo");
				$(this).css({"background":"url(resources/images/browse/uncheck_compare_results.png) 5px 0 no-repeat"});
				var id = $(this).parent().find("img").attr("id");
				$("#browse_browsebar .container ul").find("#"+id).remove();
			}
		}
		if(cont>0){
			$(".button_comare").show();
			$(".arrow_compare").show();
		}else{
			$(".button_comare").hide();
			$(".arrow_compare").hide();
		}
		
	});

	
}



function align_circles(){
	//begin in 0 end size - 1
	for (var i = 0; i < $(".im1 ul").size(); i++) {
		//align center the color circles of any image.
		var height_im1 = $(".im1").height();
		var height_ul = $(".im1 #color_circles"+i).height();
		var top_ul = Math.round(height_im1/2 - height_ul/2);
		//set the property value to top for the list of color circles.
		$(".im1 #color_circles"+i).css({ top: top_ul.toString() + "px"});
	}
}