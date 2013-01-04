$(function() {
  // Do our DOM lookups beforehand
  var nav_container = $(".nav-container");
  
  nav_container.waypoint({
    handler: function(event, direction) {
       nav_container.toggleClass('sticky', direction=='down');
    }
  });
});
$(function() {
  // Do our DOM lookups beforehand
  var nav = $("#browsebar");
  var placeh = $(".placeholderb");
  nav.waypoint({
    handler: function(event, direction) {
       nav.toggleClass('sticky', direction=='down');
       placeh.toggleClass('on', direction=='down')
    }
  });
});