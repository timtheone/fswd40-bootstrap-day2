 /* ERSTE TESTS jQuery Funktionen */

 $(document).ready(function() {

     $("header").text("Das ist unser Header");

     /*let textContent = $ ("header").text()*/



     $(function() {
         $("#accordion").accordion();
     });



     $("div#div4").after("<h3>NEUES DIV</h3><div>Inhalt unseres neuen Divs</div>");

     $("h3").css("color", "blue");

 });