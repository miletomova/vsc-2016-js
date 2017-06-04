var str = '';

for(var i = 0; i < 5; i++){
	for(var j = 0; j<= i; j++){
		var res = (j+1);
		res = res.toString();
		str += res;
	}

	console.log(str);
	str ='';
}