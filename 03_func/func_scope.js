//note that arr is in the global scope and 
//is accessible from everywhere
//count is declared inside the func scope and 
//is accessible only inside the func

var arr = [1, 2, 3, 5];


//for in - iterates over key in arr

function countOccurences (value) {
	var item,
	count = 0;

	for (item in arr) {

	  	console.log(typeof item + '/' + item);

		if (item === value) {

		count++;
	}
}

return count;
}
//returns an error
//console.log(count);
console.log(countOccurences(5));

//for of - iterates over values in arr

function countOccurences (value) {
	var item,
	count = 0;

	for (item of arr) {

		//console.log(typeof item + '/' + item);

		if (item === value) {

			count++;
		}
	}

	return count;
}
console.log(countOccurences(5));
