$(document).ready(function() {
  var top =$('#nav').offset().top - parseFloat($('#nav').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function () {
    // what is the y position of the scroll?
    var y = $(window).scrollTop();    
    // whether that's below the start of article?
    if (y >= top) {
      // if so, add the fixed class
      $('#nav').addClass('stick');
    } else {
      // otherwise, remove it
      $('#nav').removeClass('stick');
    }
  });

  $(".scroll").click(function(event){
    //prevent the default action for the click event
    event.preventDefault();

    //get the full url - like mysitecom/index.htm#home
    var full_url = this.href;

    //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
    var parts = full_url.split("#");
    var trgt = parts[1];

    //get the top offset of the target anchor
    var target_offset = $("#"+trgt).offset();
    var target_top = target_offset.top-67;

    //goto that anchor by setting the body scroll top to anchor top
    $('html, body').animate({scrollTop:target_top}, 500);
  });
});