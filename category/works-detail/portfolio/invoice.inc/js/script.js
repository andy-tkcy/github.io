
//contact_select_showdown 
$(".js-customer").on("click",function(){
  $(".selectricItems-customer").toggleClass("selectric-open");
});

$(".js-contactType").on("click",function(){
  $(".selectricItems-js-contactType").toggleClass("selectric-open");
});

// hamburger
$(".btn_trigger").on("click",function(){
  $(".btn_trigger").toggleClass("close");
  $(".globalNav_wrapper").fadeToggle(300);
  $("body").toggleClass("noscroll");
  $(".headerColor_scrolled").removeClass('headerColor_scrolled');
});

if($(window).width() < 768){
  $(".globalNav-item>a").on("click",function(){
    $(".globalNav_wrapper").fadeOut(300);
    $(".btn_trigger").removeClass("close");
    $("body").removeClass("noscroll");
  });
}

// header
$(function(){
  var imgHeight = $('.js_mainvisual').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。
  var logo = $('.js_logo');
  var header = $('.js_header'); //ヘッダーコンテンツ
  var hamburger = $('.js_hamburger');

  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight) {
       //メインビジュアル内にいるので、クラスを外す。
      logo.removeClass('logo_scrolled');
      header.removeClass('headerColor_scrolled');
      hamburger.removeClass('hamburger_scrolled');
    }else {
       //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      logo.addClass('logo_scrolled');
      header.addClass('headerColor_scrolled');
      hamburger.addClass('hamburger_scrolled');
    }
  });
});

$(window).on('scroll', function(){
  var logoc = $('.js_logo_cover');
  var hamburgerc = $('.js_hamburger_cover');
  var winw = $(window).width();
  var devw01 = 669;
  var devw02 = 375;
  var doch = $(document).innerHeight();//ページ全体の高さ
  var windh = $(window).innerHeight();//ウィンドウの高さ
  var bottom = doch - windh;//ページの最下部位置
  if (bottom * 0.99 <= $(window).scrollTop() && winw <= devw01 || bottom * 0.968<= $(window).scrollTop() && winw <= devw02){
    logoc.addClass('logo_cover');
    hamburgerc.addClass('hamburger_cover');
  }else {
    //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
    logoc.removeClass('logo_cover');
    hamburgerc.removeClass('hamburger_cover');
    }
});
