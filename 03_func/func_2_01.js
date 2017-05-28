var numbers = [3, 8, 1, 1, 4, 5, 6],
	check = 7;

function checkSum(k, arr){
	var sum = 0, 
	combi = [],
	temp= "",
	len,
	arrCombiLen, 
	curLen;

	len = Math.pow(2, arr.length);

	for (var i = 0; i < len ; i++){
		temp= "";
		for (var j=0; j<arr.length; j++) {
			if ((i & Math.pow(2,j))){ 
				temp += arr[j];
			}
		}
		if (temp !== "") {
			combi.push(temp);
		}
	}

	//console.log(combi);

	arrCombiLen = combi.length;
	//console.log(arrLen);

	for(var m = 0; m < arrCombiLen; m++){
	//console.log(combi[m].split(''));
	curLen = combi[m].split('').length;
	sum = 0;
	for(var q = 0; q < curLen; q++){
		sum+= +combi[m][q];
		//console.log(sum);
	}
	if(sum === k){
		console.log('true ' + combi[m]);
		break;
	}

}

}

checkSum(check, numbers);