$(document).ready(function() {
	$("#join_list").click(
		function() {
			var emailAddress1 = $("#email_address1").val();
			var emailAddress2 = $("#email_address2").val();
			var isValid = true;
			
			// validate the first email address
			if (emailAddress1 === "") { 
				$("#email_address1_error").text("This field is required.");
				isValid = false;
			} else {
				$("#email_address1_error").text("");
			} 			
					
			// submit the form if all entries are valid
			if (isValid) {
				$("#email_form").submit(); 
			}
		} // end function
	);	// end click
	$("#email_address1").focus();
}); // end ready
