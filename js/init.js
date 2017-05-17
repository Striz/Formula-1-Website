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

// hide navbar on scroll down
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.navBar').stop().slideToggle(300);
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $('.navBar').stop().slideToggle(300);
        up = !up;
    }
    mypos = newscroll;
});
