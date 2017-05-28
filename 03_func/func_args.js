function printSign(number) {
    if (number > 0) {
        console.log("Positive");
    } else if (number < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

printSign(1);

function printMax(x, y) {
  var max;
  x = +x; y = +y;
  max = x;

  if (y > max) {
    max = y;
  }

  console.log('Maximal number: ' + max);
}

printMax(2, 3);