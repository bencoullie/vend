$(function(){
  $(".js-phone-number").hover(function(){
    $(".inner-header .phone-number div").css({"display": "inline-block"});
  }, function(){
    $(".inner-header .phone-number div").css({"display": "none"});
  });
});
