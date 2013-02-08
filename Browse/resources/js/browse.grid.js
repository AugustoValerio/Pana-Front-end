$(function(){
	init();
});

function init(){
	check = false;
	center_pagination();
	align_circles();
	showCategory();
	showSort();
	$('.hide_scroll').jScrollPane();
	$('.hide_sort').jScrollPane();
	$(".box_results").mouseenter(function(){
		$(this).css({"background":"url('resources/images/Loose_Graphics/img-prod-box-on-1px.png') repeat-y","border-top":'#bbb 1px solid','border-bottom':'#bbb 1px solid'});
		$(this).find(".text_camera_results h2").css({"color":"#00a0c6"});
		$(this).find(".text_camera_results").css({"color":"#00a0c6"});
		$(this).find(".im1").animate({"left":"-220px"},500);
		$(this).find(".im2").animate({"left":"0px"},500);
	}).mouseleave(function(){
		$(this).css({"background":"url('resources/images/Loose_Graphics/img-prod-box-off-1px.png') repeat-y","border-top":"#d4d4d4 1px solid","border-bottom":"#d4d4d4 1px solid"});
		$(this).find(".text_camera_results h2").css({"color":"#1f1f1f"});
		$(this).find(".text_camera_results").css({"color":"#1f1f1f"});
		$(this).find(".im1").animate({"left":"0px"},500);
		$(this).find(".im2").animate({"left":"220px"},500);
	});
	var old;
	var now;
	first_time = true;
	cont = 0;
	$(".button_compare").hide();
	$(".arrow_compare").hide();
	$(".check_compare").click(function(){
		if(first_time){
			$(this).addClass("activo");
			first_time = false;
			cont = 1;

			$(this).find(".check_img").css({"background":"url('resources/images/spr-browse-all.png') -16px -132px no-repeat"});
			$("#browse_browsebar .container ul").append('<li class="box_compare_container" id='+ $(this).parent().find("img").attr("id") +'><img src='+ $(this).parent().find("img").attr("src") +' alt=""></li>');
			//$("#browse_browsebar .container").append('<div class="arrow_compare"></div>');
		}else{
				//alert($(this).hasClass("activo"));
			if(!$(this).hasClass("activo")){
				cont++;
				$(this).addClass("activo");
				$(this).find(".check_img").css({"background":"url('resources/images/spr-browse-all.png') -16px -132px no-repeat"});
				$("#browse_browsebar .container ul").append('<li class="box_compare_container" id='+ $(this).parent().find("img").attr("id") +'><img src='+ $(this).parent().find("img").attr("src") +' alt=""></li>');
			}else{
				cont--;
				$(this).removeClass("activo");
				$(this).find(".check_img").css({"background":"url('resources/images/spr-browse-all.png') -38px -132px no-repeat"});
				var id = $(this).parent().find("img").attr("id");
				$("#browse_browsebar .container ul").find("#"+id).remove();
			}
		}
		if(cont>0){
			$(".button_compare").show();
			$(".arrow_compare").show();
		}else{
			$(".button_compare").hide();
			$(".arrow_compare").hide();
		}	
	});

	$(".browse_pagination li").click(function(){
		if($(this).hasClass("active")){

		}else{
			$(".browse_pagination li").removeClass("active");
			$(this).addClass("active");
		}
		
	});

	$(".filter_elements").click(function(){
		if($(this).hasClass("active")){

		}else{
			$(".filter_elements").find("p").removeClass("active");
			$(".filter_elements").find("p").addClass("normal");
			$(this).find("p").addClass("active");
			showCategory();
		}

	});

	$(".filter_elements").mouseover(function(){
		if($(this).hasClass("active")){

		}else{
			$(this).find("p").removeClass("normal");
			$(this).find("p").addClass("rollOver");
		}
	}).mouseout(function(){
		if($(this).hasClass("active")){

		}else{
			$(this).find("p").removeClass("rollOver");
			$(this).find("p").addClass("normal");
		}
	});

	$(".sort_elements").click(function(){
		if($(this).hasClass("active")){

		}else{
			$(".sort_elements").find("p").removeClass("active");
			$(".sort_elements").find("p").addClass("normal");
			$(this).find("p").addClass("active");
			showSort();
		}

	});

	$(".sort_elements").mouseover(function(){
		if($(this).hasClass("active")){

		}else{
			$(this).find("p").removeClass("normal");
			$(this).find("p").addClass("rollOver");
		}
	}).mouseout(function(){
		if($(this).hasClass("active")){

		}else{
			$(this).find("p").removeClass("rollOver");
			$(this).find("p").addClass("normal");
		}
	});

	var posB = $("#browse_browsebar").offset();
	var posF = $(".filterbar").offset();
	var posFO = $(".filterbar-complete").offset();
	var heightB = $("#browse_browsebar").height();
	var heightF = $(".filterbar").height();
	var heightFO = $(".filterbar_complete").height();
	
	//****************Fixed postion ********************/
	$(window).scroll(function(){
		//console.log(pos);
		//*******************Title Bar********************/
		if($(this).scrollTop()>posB.top){
			$(".container_bar").css({"position":"fixed"});
		}else{
			$(".container_bar").css({"position":"static"});
		}

		//******************Filters ***********************/
		if($("#filterbar").hasClass("filterbar")){
			if(($(this).scrollTop())>(posF.top-heightF)){
				$(".filterbar").css({"position":"fixed","margin-top":"-155px"});
				$('.more_filtersbtn').css({"position":"fixed","margin-top":"-86px"});
				//$(".filterbar-complete").css({"position":"fixed","margin-top":heightB+"px"});
			}else{
				$(".filterbar").css({"position":"static","margin-top":"-70px"});
				$('.more_filtersbtn').css({"position":"static","margin-top":"-7px"});
				//$(".filterbar-complete").css({"position":"fixed","margin-top":"0px"});
			}	
		}
		//else{
			// if(($(this).scrollTop())>posB.top){
			// 	$(".filterbar-complete").css({"position":"fixed","margin-top":heightB+"px"});
			// }else{
			// 	$(".filterbar-complete").css({"position":"fixed","margin-top":"0px"});
			// }
		//}
			
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

function center_pagination(){
	var numLi = $(".browse_pagination li").size();
	var pagW = $(".browse_pagination").width();
	//console.log(numLi);
	var posPag = (pagW/2)-((($(".browse_pagination li").width()+20)*numLi)/2);

	//console.log(posPag);
	$(".browse_pagination ul").css({"left":posPag.toString()+"px"}) ;
}

function showCategory(){
	var textCategoryActive = $(".filter_elements").find(".active").text();
	//console.log(textCategoryActive);
	$(".filter_active").text(textCategoryActive);
	$("#browse_browsebar h3").text("Brose all "+textCategoryActive.toLowerCase());
}

function showSort(){
	var textSortActive = $(".sort_elements").find(".active").text();
	$(".sort_active").text(textSortActive);
}
	