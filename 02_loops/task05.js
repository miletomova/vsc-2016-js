var str = 'Hello world';

var arr = str.split(' ');
var len = arr.length; 


for(var i = 0; i < len; i++){
	var currWord = arr[i];
arr[i] = currWord.split('').reverse().join('');
	//console.log(arr[i]);
}

arr = arr.join(' ');
console.log(arr);