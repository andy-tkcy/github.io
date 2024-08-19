$(".btn_trigger").on("click",function(){
  $(".btn_trigger").toggleClass("close");
  $(".gnav").fadeToggle(300);
  $("body").toggleClass("noscroll");
});

if($(window).width() < 900){
  $(".gnav-item>a").on("click",function(){
    $(".gnav").fadeOut(300);
    $(".btn_trigger").removeClass("close");
    $("body").removeClass("noscroll");
  });
}

$(function(){
	var w = $(window).width();
	var x = 375;
	
	if(w <= x){
		$("#backtotop").click(function(){
			var position = 0;
			var speed = 600;
			$("html,body").animate({scrollTop:position},speed);
		}); 
	}
});