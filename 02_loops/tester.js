var arr = [1, 2, 3, 4, 5],
	newArr = [],
	len, objArr;

// len = arr.length;
// console.log(arr);


// for(var i = 0; i < len; i++){
// 	newArr.unshift(arr[i]);
// }

// console.log(newArr);

// //associative array

objArr = {key1: 'value1',key2:'value2'};
len = objArr.length;


// //undefined - len
//console.log(len);

for(var key in objArr ){
	//console.log(key);

	//logging values
	console.log(objArr[key]);
}

// var res = newArr.slice(0, 2);
// console.log(res);

// //newArr is unchnged!!!!!
// console.log(newArr);

// var res1 = newArr.splice(0, 2);

// console.log(res1);
// //newArr has changed
// console.log(newArr);

// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']; 
// myFish.splice(2, 0, 'drum'); 

// console.log(myFish.indexOf('drums'));

// console.log(Array.isArray(myFish));