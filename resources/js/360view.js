$(function(){
	init();
});

function init(){
	$("#angle_scroll").slider({
		slide: function( event, ui ) {
			//alert();
			var posS = Math.round($("#angle_scroll").slider( "value" )*3.6);
			$("#wrapper p").html(posS+"&#176;");
			
			var numImgs = $("#wrapper img").size();
			var angle = Math.round(100/(numImgs-1));
			var angleActualImg = Math.round($("#angle_scroll").slider( "value" )/angle)+1;
			//console.log(angleActualImg);
			var imageHeight = $("#wrapper #image_container img").height();
			//console.log(imageHeight);
			var topImages = -1*angleActualImg*imageHeight;
			if(angleActualImg == numImgs){
				//$("#image_container").css({"top":0});
			}else{
				$("#image_container").css({"top":topImages+"px"});
			}
			
			if(posS <=4){
				$("#wrapper p").html("0&#176;");
				$("#image_container").css({"top":0});	
			}else{if(posS>=356){
				$("#wrapper p").html("360&#176;");
			}

			}
			
		}
	});
}