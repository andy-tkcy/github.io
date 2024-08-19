$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});

$(".btn_trigger").on("click",function(){
  $(".btn_trigger").toggleClass("close");
  $(".nav-wrapper").fadeToggle(300);
  $("body").toggleClass("noscroll");
});

if($(window).width() < 1179){
  $(".nav-item>a").on("click",function(){
    $(".nav-wrapper").fadeOut(300);
    $(".btn_trigger").removeClass("close");
    $("body").removeClass("noscroll");
  });
}