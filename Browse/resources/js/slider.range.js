$(function() {
    $( "#slider-price" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 25, 500 ],
      slide: function( event, ui ) {
        $( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    
    $( "#price" ).val( "$" + $( "#slider-price" ).slider( "values", 0 ) +
      " - $" + $( "#slider-price" ).slider( "values", 1 ) );
    
    $( "#slider-optZoom" ).slider({
        range: true,
        min: 0,
        max: 30,
        values: [ 3.6, 30 ],
        slide: function( event, ui ) {
          $( "#optZoom" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
      });
      
      $( "#optZoom" ).val($( "#slider-optZoom" ).slider( "values", 0 ) +
        " - " + $( "#slider-optZoom" ).slider( "values", 1 ) );
    
    $('.ui-slider-range').css('background-color', '#'+'00a0c6');
    
    
  });