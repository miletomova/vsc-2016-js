var n = 10, res;


function arrayGenerate(n){
	arrGenerated = [];
	for (var i = 0; i < n; i++){
		arrGenerated[i] = parseInt((Math.random()*100));
	}
	return arrGenerated;
}

function sumEven(){
	var arr = arrayGenerate(n), sum = 0;
	console.log(arr);

	for(var item of arr){
		if(item%2 === 0){
			sum+= item;
		}
	}

	return sum;
}

res = sumEven();

console.log(res);