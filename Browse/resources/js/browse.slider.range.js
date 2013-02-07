/**
 * 
 * @Author: Diego Vera Jiménez
 * 
 * 
 */
var range = {
		init: function(){
			range.setValues();
		},
		setRangeHead: function(){
			
		},
		setValues: function(){
			var filters, flength;
			
			filters = $('#filters');
			fLength = filters.children().length;
			for(var x=0; x<fLength; x++){
				tempFilter = filters.children().eq(x);
				
				var label, input, slider, paragraph, x1Min, x2Max, x1Range, x2Range, id;
				id = tempFilter.find('.id').val();
				x1Min = tempFilter.find('.x1-min').val();
				x2Max = tempFilter.find('.x2-max').val();
				x1Range = tempFilter.find('.x1-range').val();
				x2Range = tempFilter.find('.x2-range').val();
				type = tempFilter.find('.type').val();
				typePositionL = tempFilter.find('.type').hasClass('left');
				typePositionR = tempFilter.find('.type').hasClass('right');
				
				
				label = $('<label></label>');
				label.attr('for', id);
				
				input = $('<input />')
				input.attr('disabled', 'true');
				input.attr('type', 'text');
				input.attr('id', id);
				
				slider = $('<div></div>');
				slider.addClass('sliderSize');
				slider.attr('id','slider-'+id);
				
				paragraph = $('<p></p>');
				paragraph.append(tempFilter.find('.label').val());
				
				tempFilter.append(label);
				tempFilter.append(input);
				tempFilter.append(slider);
				tempFilter.append(paragraph);
				range.setSlider(id, x1Min, x2Max, x1Range, x2Range, type, typePositionL, typePositionR);
				
			}
	},
	setSlider: function(id, x1Min, x2Max, x1Range, x2Range, type, typePositionL, typePositionR){
		var left, right;
		left= "";
		right="";

		if(typePositionL){
			left= type;
		}
		if(typePositionR){
			right = type;
		}
		$( "#slider-"+id ).slider({
		  range: true,
		  min: x1Min,
		  max: x2Max,
		  values: [ x1Range, x2Range ],
		  slide: function( event, ui ) {
		    $( "#"+id ).val( left + ui.values[ 0 ] + right + " - " + left + ui.values[ 1 ] + right);
		  }
		});
		$( "#"+id ).val( left + $( "#slider-"+id ).slider( "values", 0 ) + right +
        " - " + left + $( "#slider-"+id ).slider( "values", 1 ) + right);
	}
}


$(document).ready(function(){
	range.init();
	
});