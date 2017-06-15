$(document).ready(function() {
    $("#categories h2").click(function() {
		$(this).toggleClass("minus");
		$('#image').css('display', 'none');
		if ($(this).attr("class") != "minus") {
		   	$(this).next().hide();
	   	}
	   	else {
	        $(this).next().show();
	   	}
    }); // end click

 
	// set up event handlers for links    
	$("a").click(function(evt) {
		// cancel the default action of the link
		 // jQuery method that's cross-browser compatible
	    
		evt.preventDefault(); 
		$('#image').css('display', 'block');		
		// swap image
		var imageURL = $(this).attr("href");
		console.log(imageURL);

		$("#image").attr("src", imageURL);
				
	}); // end click
		
}); // end ready
