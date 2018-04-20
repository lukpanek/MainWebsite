/*

    Lukáš Pánek - Hlavní JS soubor

*/

var stringsNew = ["vývojář", "krocan", "šílenec", "student", "redaktor", "hráč"];
window.setInterval(function(){
    var result = Math.floor((Math.random() * stringsNew.length) + 0);
    while (stringsNew[result] == $('.animated').text()) {
        var result = Math.floor((Math.random() * stringsNew.length) + 0);
    }
    $('.animated').animate({
        opacity: 0,
        top: "10px"
    }, 250, function() {
        $(".animated").css('top', '-10px');
        $(".animated").text(stringsNew[result]).animate({
            opacity: 1,
            top: "0px"
        }, 250);
    });
}, 3000);

function toggleMenu() {
    var x = document.getElementById("navigation");
    if (x.className === "shown") { x.className = "hidden" } 
    else { x.className = "shown"; }
}

window.setInterval(function(){
    var d2 = new Date();
    var d1 = new Date(2001, 9, 13);
    var diff = d2.getTime() - d1.getTime();
    var number = diff / (1000 * 60 * 60 * 24 * 365.25)
    $(".current-age").html(number.toFixed(10));
}, 100);

$(function () {
  $("[data-toggle=\"tooltip\"]").tooltip();
});