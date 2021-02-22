$(function() {
  $('#top_yukimiku').on('click', function() {
    $("#overlay, #overlayWindow").fadeIn();
  });
      
  $('#close_button').on('click', function() {
    $("#overlay, #overlayWindow").fadeOut();
  });
});