$(document).ready(function(){       
   var scrollStart = 0;
   var startChange = $("#body");
   var offset = startChange.offset();
   $(document).scroll(function() { 
      scrollStart = $(this).scrollTop();
      if(scrollStart > offset.top) {
          $("#navigation").css("color", "#191919");
          $("#navigation").css("background", "#fff");
          $("ul#navigation li a").css("color", "#191919");
       } else {
          $("#navigation").css("color", "#fff");
          $("ul#navigation li a").css("color", "#fff");
          $("#navigation").css("background", "transparent");
       }
   });
});

var strings = ["vývojář^1000", "krocan^1000", "šílenec^1000", "student^1000", "redaktor^1000", "hráč^1000"];
$(function(){
    $(".animated").typed({
        strings: strings,
        typeSpeed: 50,
        loop: true,
        loopCount: Infinity,
        shuffle: true
    });
});

function toggleMenu() {
    var x = document.getElementById("navigation");
    if (x.className === "shown") {
        x.className = "hidden";
    } else {
        x.className = "shown";
    }
}

window.setInterval(function(){
    var d2 = new Date();
    var d1 = new Date(2001, 9, 13);
    var diff = d2.getTime() - d1.getTime();
    $(".current-age").html(diff / (1000 * 60 * 60 * 24 * 365.25).toFixed(10));
}, 100);

$(function () {
  $("[data-toggle=\"tooltip\"]").tooltip();
});