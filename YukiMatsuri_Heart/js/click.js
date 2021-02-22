$(function() {            
    $('.btn').click(function() {            
      $('.active').removeClass('active');            
                              
      var clickedIndex = $('.btn').index($(this));            
          
      $('.sli').eq(clickedIndex).addClass('active');            

    });            
  });            
  document.getElementById("menuButton").addEventListener("click", function() {
    this.classList.toggle("active2");
    document.getElementById("nav").classList.toggle("active2");
    document.getElementById("mask").classList.toggle("active2");
})
