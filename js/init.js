 $(document).ready(function(){
    $('#content').pushpin({
      top: $('#content').offset().top 
    });
    $('.scrollspy').scrollSpy({
      scrollOffset: 0
    });
  }); 

/**$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  }); **/