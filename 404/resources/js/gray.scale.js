var grayScale = {
		
		init: function(){
			if($.browser.msie == true && $.browser.version == '10.0'){
				this.setThumbnailIE10();
				this.hover();
				this.click();
			}
			else{
				$('head').append('<link rel="stylesheet" href="resources/css/gray.scale.css">');

				this.setThumbnail();
			}
		},
		setThumbnail: function() {
			
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
			
		},
		setThumbnailIE10: function() {
			
			var thumbLength, pagiA, thumSrc, thumImg, svg, defs, filter, image;
			
			pagiA = $('#pagi a');
			thumbLength = pagiA.length;
			$('#pagi a span').hide();
			setTimeout(function(){	
				
				for(var x=0; x<thumbLength; x++ ){
					$('#pagi a').eq(x).children().remove();
					thumSrc = $('#thumbnail').children().eq(x).attr('src');
					
					image = grayScale.objectSVGIE10(thumSrc);

					$('#pagi a').eq(x).append(image);
					
				}

				$('#pagi .selected #svgroot image').removeAttr('filter').off('hover');

				$('#pagi').css('margin-top','45');
			},600);
			
			$('#next_samples , #prev_samples').click(function(){
				grayScale.hover();
				$('#pagi  #svgroot image').attr('filter','url(#filtersPicture)');
				
				$('#pagi .selected #svgroot image').removeAttr('filter');
				
				$('#pagi .selected #svgroot image').off('hover');
				
			});
			
		},
		objectSVGIE10: function(imgSrc) {
			var imageIE10, imgSrc;
			this.imgSrc = imgSrc;
			imageIE10 = '<svg xmlns="" id="svgroot" viewBox="0 0 75 42" width="75" height="42"><defs><filter id="filtersPicture"><feComposite operator="arithmetic" k1="0" k2="1" k3="0" k4="0" /><feColorMatrix id="filter_38" type="saturate" values="0" data-filterid="38" /></filter></defs><image filter="url(#filtersPicture)" x="0" y="0" width="75" height="42" xlink:href="'+imgSrc+'" /></svg>';
			return 	imageIE10;	
		},
		hover: function(){
			setTimeout(function(){	
				$('#pagi a #svgroot image').hover(
					function(){
						$(this).removeAttr('filter');
						$('#pagi .selected #svgroot image').off('hover');
					},
					function(){
						$(this).attr('filter','url(#filtersPicture)');
						$('#pagi .selected #svgroot image').off('hover');
					}
				);
			},700);
			
		},
		click: function(){
			setTimeout(function(){	
				$('#pagi a #svgroot image').click(function(){
					grayScale.hover();
					$('#pagi a #svgroot image').attr('filter','url(#filtersPicture)');
					$(this).removeAttr('filter');
					$(this).off('hover');
				});
			},700);	
		}

		
}

$(document).ready(function(){
	
	grayScale.init();
	
});

$(function() {
    $(window).resize(function(){
		grayScale.init();
});
});

