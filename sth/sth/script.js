// This is the click counter that tells you how many times you've guessed in the game.
var clicks = 0;
$("#submit").click(function() {
	clicks++;
	$("#guesses").html(clicks);
});

// Generates a non-repeating, random number and stores it in a global variable known as "secret".

$("#start").click(function() {
	var arr = [];
	while (arr.length < 4) {
		var randomnumber = Math.ceil(Math.random() * 9);
    console.log(randomnumber);
    if(arr.indexOf(randomnumber) < 0){
      arr.push(randomnumber);
    }
		// console.log(randomnumber);
		// var found = false;
		// for (var i = 0; i < arr.length; i++) {
		// 	if (arr[i] === randomnumber) {
		// 		found = true;
		// 		break;
		// 	}
		// }
		// if (!found) arr[arr.length] = randomnumber;
	}
  // console.log(arr);
	window.secret =arr.join('');
 console.log(arr.join(''));
});

// When you click "Start playing!", it hides the button, shows the game, sets guesses equal to 0, and generates the number for the game.

$("#start").click(function() {
	$("#game").show();
	$("#start").hide();
	$("#submit").show();
	$("#guesses").html("0");
});

// When you hit the "Stop playing." button, it clears the results of the game and guess input box, in addition to hiding the game functions and showing the "Start playing!" button.

$("#stop").click(function() {
	$("#game").hide();
	$("#start").show();
	$("#results").html("");
	$("#guess").val("");
	clicks = 0;
});

window.game = function() {

  // Stores your guess in a variable

  var guess = $("#guess").val();

  // Makes sure the number is 4 digits

  if (guess.length != 4) {
  	alert("This number is too long or short to be valid.");
  }

  // Makes sure the numbers are non-repeating if they're 4 digits.
  else if (guess.charAt(0) === guess.charAt(1) || guess.charAt(0) === guess.charAt(2) || guess.charAt(0) === guess.charAt(3) || guess.charAt(1) === guess.charAt(2) || guess.charAt(1) === guess.charAt(3) || guess.charAt(2) === guess.charAt(3)) {
  	alert("This game doesn't have any repeating digits.");
  }

  // This is the actual game.
  else {

    // These two variables will be updated with each guess the user inputs.

    var bulls = 0;
    var cows = 0;

    // This is where JavaScript checks the bulls and cows and adds them up accordingly.

       if (guess !== secret) {
      if (guess.charAt(0) === secret.charAt(0)) {
        bulls += 1;
      } else if (guess.charAt(0) === secret.charAt(1) || guess.charAt(0) === secret.charAt(2) || guess.charAt(0) === secret.charAt(3)) {
        cows += 1;
      }
      if (guess.charAt(1) === secret.charAt(1)) {
        bulls += 1;
      } else if (guess.charAt(1) === secret.charAt(0) || guess.charAt(1) === secret.charAt(2) || guess.charAt(1) === secret.charAt(3)) {
        cows += 1;
      }
      if (guess.charAt(2) === secret.charAt(2)) {
        bulls += 1;
      } else if (guess.charAt(2) === secret.charAt(0) || guess.charAt(2) === secret.charAt(1) || guess.charAt(2) === secret.charAt(3)) {
        cows += 1;
      }
      if (guess.charAt(3) === secret.charAt(3)) {
        bulls += 1;
      } else if (guess.charAt(3) === secret.charAt(0) || guess.charAt(3) === secret.charAt(1) || guess.charAt(3) === secret.charAt(2)) {
        cows += 1;
      }
      $("#results").html("Bulls: " + bulls + " & Cows: " + cows + "");
    } else if (guess === secret) {
      $("#results").html("<strong>Congrats, you won! <a href='cookie.jpg'>Here's a picture</a> of a cookie.</strong>");
      $("#submit").hide();
    }
  }
}