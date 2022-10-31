
$("#dark-btn").click(function(){
  $(".box").toggleClass("dark");
  $("body").toggleClass("dark");
});

$("#glow-btn").click(function(){
    $(".box").toggleClass("glow");
    $("body").toggleClass("glow");
});

$("#spin-btn").click(function(){
    $(".box").toggleClass("spin");
    $("body").toggleClass("spin");
});

$("#reveal-btn").click(function(){
    $(".bug").css("opacity", "1");
    $("#reveal-btn").hide();
});