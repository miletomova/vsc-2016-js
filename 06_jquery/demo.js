$(document).ready(function(){

function onButtonClick(e){
		e.preventDefault();
          $(".selected").removeClass("selected"); 
          $(this).addClass("selected");
        } 

$("a.button").on("click", onButtonClick);




});