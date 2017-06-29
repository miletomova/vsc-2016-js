$('#btn').on('click', function(e){
e.preventDefault();
var flag = true;
var inputName = $('#name');
var inputPd = $('#pd');


if (inputName.val() === '') {
var span = $('<span>');
	span.text('Enter Name').css('color', 'red');
	inputName.parent().append( span );

	flag = false;
	
}

if (inputPd.val() === '') {
	var span = $('<span>');
	span.text('EnterPassword').css('color', 'red');
	inputPd.parent().append( span );
	flag = false;
	
}

if(flag === true){

	var span = $('<span>');

	span.text('Success! Welcome!').css('color', 'green');
	$( "body" ).append( span );
}

});

